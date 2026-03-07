import { z } from "zod";
import { prisma } from "../../utils/auth";
import { sendNewOrderNotification } from "../../utils/telegram";

const createOrderSchema = z.object({
  clientName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().min(5, "WhatsApp number is required"),
  systemType: z.enum([
    "medical",
    "restaurant",
    "school",
    "custom",
    "internet_users",
  ]),
  description: z.string().optional(),
  modules: z.array(
    z.object({
      name: z.string(),
      price: z.number(),
      systemType: z.string(),
    })
  ),
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate input
    const validatedData = createOrderSchema.parse(body);

    // Calculate total price from modules
    const totalPrice = validatedData.modules.reduce(
      (sum, module) => sum + module.price,
      0
    );

    // Create order with modules
    const order = await prisma.order.create({
      data: {
        clientName: validatedData.clientName,
        email: validatedData.email,
        whatsapp: validatedData.whatsapp,
        systemType: validatedData.systemType,
        description: validatedData.description || "",
        totalPrice,
        status: "New",
        modules: {
          create: validatedData.modules.map((module) => ({
            name: module.name,
            price: module.price,
            systemType: module.systemType,
          })),
        },
      },
      include: {
        modules: true,
      },
    });

    // Send Telegram notification
    await sendNewOrderNotification({
      id: order.id,
      clientName: order.clientName,
      email: order.email,
      whatsapp: order.whatsapp,
      systemType: order.systemType,
      description: order.description,
      totalPrice: order.totalPrice,
      modules: order.modules,
    });

    return {
      success: true,
      order,
      message: "Order submitted successfully",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation error",
        data: error.errors,
      });
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to create order",
    });
  }
});

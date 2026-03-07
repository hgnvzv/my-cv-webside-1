import { z } from "zod";
import { prisma } from "../../utils/auth";

const updateStatusSchema = z.object({
  status: z.enum(["New", "In Progress", "Completed"]),
});

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");

    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "Order ID is required",
      });
    }

    const body = await readBody(event);
    const validatedData = updateStatusSchema.parse(body);

    const order = await prisma.order.update({
      where: { id },
      data: { status: validatedData.status },
      include: { modules: true },
    });

    return {
      success: true,
      order,
      message: "Order status updated successfully",
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
      statusMessage: "Failed to update order status",
    });
  }
});

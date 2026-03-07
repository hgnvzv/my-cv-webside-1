import { prisma } from "../../utils/auth";

export default defineEventHandler(async (event) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        modules: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      orders,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch orders",
    });
  }
});

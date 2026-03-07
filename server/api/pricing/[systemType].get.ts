import { prisma } from "../../utils/auth";

export default defineEventHandler(async (event) => {
  try {
    const systemType = getRouterParam(event, "systemType");

    if (!systemType) {
      throw createError({
        statusCode: 400,
        statusMessage: "System type is required",
      });
    }

    const pricingModules = await prisma.pricingModule.findMany({
      where: {
        systemType,
        isActive: true,
      },
      orderBy: { name: "asc" },
    });

    return {
      success: true,
      pricingModules,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch pricing modules",
    });
  }
});

import { prisma } from "../../utils/auth";

export default defineEventHandler(async (event) => {
  try {
    const pricingModules = await prisma.pricingModule.findMany({
      where: { isActive: true },
      orderBy: [{ systemType: "asc" }, { name: "asc" }],
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

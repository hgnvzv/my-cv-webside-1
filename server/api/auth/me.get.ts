import { getCurrentUser } from "../../utils/auth";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const user = await getCurrentUser(event, config.jwtSecret);

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  return {
    success: true,
    user,
  };
});

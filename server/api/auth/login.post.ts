import { z } from "zod";
import {
  prisma,
  verifyPassword,
  generateToken,
  setAuthCookie,
} from "../../utils/auth";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate input
    const validatedData = loginSchema.parse(body);

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid credentials",
      });
    }

    // Verify password
    const isValidPassword = await verifyPassword(
      validatedData.password,
      user.password
    );

    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid credentials",
      });
    }

    // Generate token
    const config = useRuntimeConfig();
    const token = generateToken(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      config.jwtSecret
    );

    // Set httpOnly cookie
    setAuthCookie(event, token);

    // Return user info (without password)
    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation error",
        data: error.errors,
      });
    }
    throw error;
  }
});

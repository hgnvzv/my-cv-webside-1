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

// Hardcoded admin for guaranteed access
const HARDCODED_ADMIN = {
  id: "admin-001",
  email: "atfsucy.com@gmail.com",
  password: "8mk82001",
  name: "Admin",
  role: "admin",
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate input
    const validatedData = loginSchema.parse(body);

    // Check hardcoded admin first
    if (validatedData.email === HARDCODED_ADMIN.email) {
      if (validatedData.password === HARDCODED_ADMIN.password) {
        // Generate token for hardcoded admin
        const config = useRuntimeConfig();
        const token = generateToken(
          {
            userId: HARDCODED_ADMIN.id,
            email: HARDCODED_ADMIN.email,
            role: HARDCODED_ADMIN.role,
          },
          config.jwtSecret
        );

        // Set httpOnly cookie
        setAuthCookie(event, token);

        return {
          success: true,
          user: {
            id: HARDCODED_ADMIN.id,
            email: HARDCODED_ADMIN.email,
            name: HARDCODED_ADMIN.name,
            role: HARDCODED_ADMIN.role,
          },
        };
      } else {
        throw createError({
          statusCode: 401,
          statusMessage: "Invalid credentials",
        });
      }
    }

    // Find user in database
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

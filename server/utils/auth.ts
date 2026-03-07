import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { H3Event } from "h3";
import { parseCookies, setCookie, deleteCookie } from "h3";

const prisma = new PrismaClient();

// Cookie configuration
const COOKIE_NAME = "auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token
 */
export function generateToken(payload: JwtPayload, secret: string): string {
  // jsonwebtoken uses default export; ensure runtime has sign method
  return jwt.sign(payload, secret, { expiresIn: "7d" });
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string, secret: string): JwtPayload | null {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch {
    return null;
  }
}

/**
 * Set the authentication cookie
 */
export function setAuthCookie(event: H3Event, token: string): void {
  const isProduction = process.env.NODE_ENV === "production";

  setCookie(event, COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
}

/**
 * Clear the authentication cookie
 */
export function clearAuthCookie(event: H3Event): void {
  deleteCookie(event, COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

/**
 * Get the authentication token from cookies
 */
export function getAuthToken(event: H3Event): string | undefined {
  const cookies = parseCookies(event);
  return cookies[COOKIE_NAME];
}

/**
 * Get the current user from the request
 */
export async function getCurrentUser(event: H3Event, jwtSecret: string) {
  const token = getAuthToken(event);

  if (!token) {
    return null;
  }

  const payload = verifyToken(token, jwtSecret);

  if (!payload) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
    },
  });

  return user;
}

/**
 * Require authentication - throws if not authenticated
 */
export async function requireAuth(event: H3Event, jwtSecret: string) {
  const user = await getCurrentUser(event, jwtSecret);

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  return user;
}

/**
 * Prisma client instance for use in other files
 */
export { prisma };

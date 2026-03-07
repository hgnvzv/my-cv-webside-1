import { defineEventHandler } from "h3";
import { getCurrentUser } from "../utils/auth";

export default defineEventHandler(async (event) => {
  // Only protect /api routes that require authentication
  const url = event.node.req.url || "";

  // Public routes that don't need authentication
  const publicRoutes = [
    "/api/auth/login",
    "/api/orders", // POST is public for creating orders
    "/api/pricing", // GET is public
  ];

  // Check if this is a protected route
  const isProtectedRoute =
    url.startsWith("/api") &&
    !publicRoutes.some((route) => url.startsWith(route)) &&
    !url.match(/\/api\/orders\/.*\.patch$/); // Exclude PATCH orders (protected)

  // For GET /api/orders - needs protection
  if (url === "/api/orders" && event.node.req.method === "GET") {
    const config = useRuntimeConfig();
    const user = await getCurrentUser(event, config.jwtSecret);

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }

    event.context.user = user;
    return;
  }

  // For PATCH /api/orders/[id] - needs protection
  if (
    url.match(/\/api\/orders\/.*\.patch$/) ||
    (url.match(/\/api\/orders\/.*/) && event.node.req.method === "PATCH")
  ) {
    const config = useRuntimeConfig();
    const user = await getCurrentUser(event, config.jwtSecret);

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }

    event.context.user = user;
    return;
  }

  // For POST/PATCH pricing - needs protection
  if (
    url.startsWith("/api/pricing") &&
    (event.node.req.method === "POST" || event.node.req.method === "PATCH")
  ) {
    const config = useRuntimeConfig();
    const user = await getCurrentUser(event, config.jwtSecret);

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }

    event.context.user = user;
    return;
  }
});

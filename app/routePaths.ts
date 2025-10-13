// Central route path constants to reference routes across the app.
// Each entry exposes both a `path` (used by route definitions, relative segments)
// and a `to` (absolute path string, useful for Link/to and navigate).
export const ROUTES = {
  HOME: { path: "", to: "/" },
  LOGIN: { path: "login", to: "/login" },
  MY_ROUTINES: { path: "my-routines", to: "/my-routines" },
} as const;

export type RouteKey = keyof typeof ROUTES;

export const toPath = (route: { to: string } | string) =>
  typeof route === "string" ? route : route.to;

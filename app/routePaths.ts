// Central route path constants to reference routes across the app.
// Each entry exposes both a `path` (used by route definitions, relative segments)
// and a `to` (absolute path string, useful for Link/to and navigate).

export const ROUTES = {
  HOME: { path: "", to: "/" },
  LOGIN: { path: "login", to: "/login" },
  // My Routines: list and detail
  MY_ROUTINES: {
    path: "my-routines", to: "/my-routines",
    ID: {
      path: "my-routines/:id",
      to: (id: string | number) => `/my-routines/${id}`,
    },
  },
  // Routines: list and detail
  ROUTINES: {
    path: "routines", to: "/routines",
    ID: {
      path: "routines/:id",
      to: (id: string | number) => `/routines/${id}`,
    },
  },
} as const;

export type RouteKey = keyof typeof ROUTES;


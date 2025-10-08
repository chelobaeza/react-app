import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("layouts/MainLayout.tsx", [
    index("routes/home/home.tsx"),
    route("login", "routes/login/login.tsx"),
    route("my-routines", "routes/my-routines/my-routines.tsx"),
  ]),
] satisfies RouteConfig;

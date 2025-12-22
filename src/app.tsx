import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeEnum, ThemeProvider } from "./contexts";
import { routeTree } from "./route-tree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <ThemeProvider defaultTheme={ThemeEnum.System} storageKey="theme-mode">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

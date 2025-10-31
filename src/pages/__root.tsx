import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  useMatches,
} from "@tanstack/react-router";

export const Route = createRootRouteWithContext()({
  component: RootComponent,
});

function RootComponent() {
  const matches = useMatches();

  return (
    <>
      <HeadContent />

      <Outlet />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/organize")({
  component: OrganizePage,
});

function OrganizePage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

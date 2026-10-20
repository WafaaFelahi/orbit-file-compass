import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/activity")({
  component: ActivityPage,
});

function ActivityPage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

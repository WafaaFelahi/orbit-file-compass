import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/storage")({
  component: StoragePage,
});

function StoragePage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

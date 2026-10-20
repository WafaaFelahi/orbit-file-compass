import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/migration")({
  component: MigrationPage,
});

function MigrationPage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

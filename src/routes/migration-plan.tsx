import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/migration-plan")({
  component: MigrationPlanPage,
});

function MigrationPlanPage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

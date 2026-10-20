import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/backup")({
  component: BackupPage,
});

function BackupPage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

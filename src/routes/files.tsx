import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/files")({
  component: FilesPage,
});

function FilesPage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

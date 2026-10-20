import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

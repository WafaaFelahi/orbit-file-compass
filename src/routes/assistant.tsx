import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/assistant")({
  component: AssistantPage,
});

function AssistantPage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

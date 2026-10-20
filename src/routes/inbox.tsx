import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inbox")({
  component: InboxPage,
});

function InboxPage() {
  return <div className="p-6 text-muted-foreground">Loading…</div>;
}

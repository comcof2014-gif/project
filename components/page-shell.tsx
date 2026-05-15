export function PageShell({ title, description }: { title: string; description: string }) {
  return <section className="space-y-3 rounded-xl border bg-white p-4"><h1 className="text-xl font-bold">{title}</h1><p className="text-sm text-slate-600">{description}</p></section>;
}

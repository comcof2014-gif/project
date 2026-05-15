import { faqItems } from "@/lib/mock";

export default function FaqPage() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold">자주 묻는 질문</h1>
      {faqItems.map((item) => (
        <article key={item.q} className="card">
          <h2 className="font-semibold">Q. {item.q}</h2>
          <p className="mt-1 text-sm text-slate-700">A. {item.a}</p>
        </article>
      ))}
    </section>
  );
}

import Link from "next/link";
import { categories, products } from "@/lib/mock";

export default function ProductsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">보일러·배관자재 상품</h1>
      <div className="flex flex-wrap gap-2 text-xs">
        {categories.map((c) => <span key={c} className="rounded-full border px-3 py-1">{c}</span>)}
      </div>
      <div className="grid gap-3">
        {products.map((p) => (
          <article key={p.id} className="card space-y-2">
            <p className="text-xs text-slate-500">{p.brand} · {p.category}</p>
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-sm">{p.shortDescription}</p>
            <p className="font-bold">일반가 {p.publicPrice.toLocaleString()}원</p>
            <p className="text-sm text-indigo-700">도매회원가 {p.businessPrice.toLocaleString()}원 (승인회원 전용)</p>
            <Link className="btn-secondary mt-2" href={`/products/${p.id}`}>상세보기</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

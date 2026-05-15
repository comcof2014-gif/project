import Link from "next/link";
import { products } from "@/lib/mock";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((x) => x.id === id);
  const isApprovedBusinessDemo = false;

  if (!product) return <div className="card">상품이 없습니다.</div>;

  return (
    <div className="space-y-4">
      <div className="card space-y-2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-sm text-slate-600">{product.brand} · {product.category} · {product.fuelType}</p>
        <p>용량 {product.capacity} / 권장 {product.heatingArea}</p>
        <p className="text-lg font-bold">일반가 {product.publicPrice.toLocaleString()}원</p>
        {isApprovedBusinessDemo ? (
          <p className="text-indigo-700">도매가 {product.businessPrice.toLocaleString()}원</p>
        ) : (
          <p className="text-sm text-slate-600">설비업체 인증 후 도매가를 확인할 수 있습니다.</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <a href={product.smartstoreUrl} target="_blank" className="btn" rel="noreferrer">스마트스토어에서 구매하기</a>
        <Link href="/installation/request" className="btn-secondary">무료 설치중개 신청</Link>
        <Link href="/quote/bulk" className="btn-secondary">대량 견적 문의</Link>
      </div>
      <p className="text-sm text-slate-500">초기 결제는 스마트스토어 또는 상담을 통해 진행됩니다.</p>
    </div>
  );
}

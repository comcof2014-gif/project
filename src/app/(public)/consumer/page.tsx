import Link from "next/link";

export default function ConsumerLandingPage() {
  return (
    <section className="card space-y-3">
      <h1 className="text-2xl font-bold">일반 고객 안내</h1>
      <p>회원가입 없이 보일러 상품 확인 및 무료 설치중개 신청이 가능합니다.</p>
      <div className="flex gap-2">
        <Link href="/products" className="btn">상품 보기</Link>
        <Link href="/installation/request" className="btn-secondary">설치 신청</Link>
      </div>
    </section>
  );
}

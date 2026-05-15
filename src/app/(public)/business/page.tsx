import Link from "next/link";

export default function BusinessLandingPage() {
  return (
    <section className="space-y-3 card">
      <h1 className="text-2xl font-bold">설비업체·보일러업체 B2B</h1>
      <p>빠른 상품 검색, 반복주문, 대량견적, 거래명세 요청까지 한 번에.</p>
      <ul className="list-disc pl-5 text-sm text-slate-700">
        <li>사업자 인증 승인 후 도매가 노출</li>
        <li>반복구매 요청 및 거래명세서 요청</li>
        <li>전문 상담팀 우선 응대</li>
      </ul>
      <Link href="/business/signup" className="btn">도매회원 가입</Link>
    </section>
  );
}

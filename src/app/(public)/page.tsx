import Link from "next/link";

const ctas = [
  ["/installation/request", "무료 설치중개 신청"],
  ["/products", "보일러 상품 보기"],
  ["/business/signup", "설비업체 도매회원 가입"],
  ["/installer/signup", "설치기사 파트너 가입"]
] as const;

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="card space-y-3">
        <p className="text-sm font-semibold text-blue-700">rinn.ai · 인스웨이</p>
        <h1 className="text-3xl font-bold leading-tight">보일러 구매 고객에게 설치중개 무료</h1>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>설치중개 수수료 0원</li>
          <li>수도권 우선 빠른 설치 매칭</li>
          <li>설비업체·보일러업체 전용 도매가 제공</li>
          <li>설치 후 사후관리까지 연결</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {ctas.map(([href, label]) => (
            <Link key={href} className="btn" href={href}>{label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}

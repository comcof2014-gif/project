const stats = [
  ["설치 요청", "24건"],
  ["배정 대기", "7건"],
  ["사업자 승인 대기", "3건"],
  ["설치기사 승인 대기", "4건"],
  ["A/S 대기", "5건"],
  ["보험 리드", "6건"]
];

export default function AdminDashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">관리자 대시보드</h1>
      <div className="grid grid-cols-2 gap-3">
        {stats.map(([label, value]) => (
          <div key={label} className="card">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

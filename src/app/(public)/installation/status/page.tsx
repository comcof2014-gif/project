"use client";

import { useState } from "react";

const mock = {
  trackingCode: "INS-DEMO01",
  phone: "01012345678",
  status: "관리자 확인중"
};

export default function InstallationStatusPage() {
  const [result, setResult] = useState<string>("");
  return (
    <div className="card space-y-3">
      <h1 className="text-xl font-bold">설치 진행상태 조회</h1>
      <p className="text-sm text-slate-600">전화번호 + 접수코드로 조회할 수 있습니다.</p>
      <button className="btn" onClick={() => setResult(`${mock.trackingCode}: ${mock.status}`)}>데모 조회하기</button>
      {result && <p className="rounded bg-slate-100 p-2 text-sm">{result}</p>}
    </div>
  );
}

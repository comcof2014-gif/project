"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "이름을 입력하세요"),
  phone: z.string().min(9, "연락처를 입력하세요"),
  message: z.string().min(5, "요청 내용을 입력하세요"),
  privacyConsent: z.literal(true, { errorMap: () => ({ message: "개인정보 수집 동의가 필요합니다." }) })
});

type Values = z.infer<typeof schema>;

export function SimpleForm({ title, description }: { title: string; description?: string }) {
  const [trackingCode, setTrackingCode] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { privacyConsent: true }
  });

  const onSubmit = async () => {
    const code = `INS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setTrackingCode(code);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card space-y-3" aria-label={`${title} 폼`}>
      <h1 className="text-xl font-bold">{title}</h1>
      {description && <p className="text-sm text-slate-600">{description}</p>}
      <div>
        <label className="label" htmlFor="name">이름</label>
        <input id="name" className="input" {...register("name")} />
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <label className="label" htmlFor="phone">연락처</label>
        <input id="phone" className="input" placeholder="010-1234-5678" {...register("phone")} />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="label" htmlFor="message">요청 내용</label>
        <textarea id="message" className="input min-h-24" {...register("message")} />
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
      </div>
      <div>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("privacyConsent")} /> 개인정보 수집 및 이용에 동의합니다.
        </label>
        {errors.privacyConsent && <p className="text-red-600 text-sm">{errors.privacyConsent.message}</p>}
      </div>
      <p className="text-sm text-slate-500">현장 사진을 올려주시면 더 정확한 상담이 가능합니다.</p>
      <button disabled={isSubmitting} className="btn">{isSubmitting ? "제출 중..." : "접수하기"}</button>
      {trackingCode && <p className="rounded bg-emerald-50 p-2 text-sm text-emerald-700">접수되었습니다. 조회 코드: {trackingCode}</p>}
    </form>
  );
}

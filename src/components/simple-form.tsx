"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({ name: z.string().min(2, "이름을 입력하세요"), phone: z.string().min(8), message: z.string().min(5) });
type Values = z.infer<typeof schema>;
export function SimpleForm({ title }: { title: string }) {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({ resolver: zodResolver(schema) });
  return <form onSubmit={handleSubmit(async()=>{})} className="card space-y-3"><h1 className="text-xl font-bold">{title} 신청</h1><div><label className="label">이름</label><input className="input" {...register("name")} />{errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}</div><div><label className="label">연락처</label><input className="input" {...register("phone")} /></div><div><label className="label">요청 내용</label><textarea className="input" {...register("message")} /></div><p className="text-sm text-slate-500">현장 사진을 올려주시면 더 정확한 상담이 가능합니다.</p><button disabled={isSubmitting} className="btn">제출</button>{isSubmitSuccessful && <p>접수되었습니다.</p>}</form>;
}

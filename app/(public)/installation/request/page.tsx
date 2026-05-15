'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { installationRequestSchema } from '@/lib/validation';
import { z } from 'zod';
type Form = z.infer<typeof installationRequestSchema>;
export default function Page(){const {register,handleSubmit,formState:{errors,isSubmitSuccessful}}=useForm<Form>({resolver:zodResolver(installationRequestSchema)});return <form onSubmit={handleSubmit(()=>alert('신청 완료(목업)'))} className='space-y-2 rounded border bg-white p-4'><h1 className='text-xl font-bold'>무료 설치중개 신청</h1><input {...register('customer_name')} placeholder='고객명' className='w-full rounded border p-2'/>{errors.customer_name&&<p>이름 확인</p>}<input {...register('phone')} placeholder='연락처' className='w-full rounded border p-2'/><input {...register('address')} placeholder='주소' className='w-full rounded border p-2'/><input {...register('region')} placeholder='지역' className='w-full rounded border p-2'/><label><input type='checkbox' {...register('privacy_consent')}/> 개인정보 동의(필수)</label><p className='text-sm'>현장 사진을 올려주시면 더 정확한 상담이 가능합니다.</p><button className='rounded bg-blue-600 px-4 py-2 text-white'>신청하기</button>{isSubmitSuccessful&&<p>접수되었습니다.</p>}</form>}

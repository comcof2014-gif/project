'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const installSchema=z.object({customer_name:z.string().min(2),phone:z.string().min(10),address:z.string().min(3),privacy:z.literal(true)});
export function InstallationRequestForm(){const {register,handleSubmit,formState:{errors,isSubmitting,isSubmitSuccessful}}=useForm<z.infer<typeof installSchema>>({resolver:zodResolver(installSchema)});return <form className='space-y-2' onSubmit={handleSubmit(async()=>{})}><input className='w-full border p-2' placeholder='고객명' {...register('customer_name')}/><p>{errors.customer_name?.message}</p><input className='w-full border p-2' placeholder='연락처' {...register('phone')}/><input className='w-full border p-2' placeholder='주소' {...register('address')}/><label className='flex gap-2'><input type='checkbox' {...register('privacy')}/>개인정보 수집 동의(필수)</label><button className='bg-blue-600 text-white px-4 py-2 rounded' disabled={isSubmitting}>신청하기</button>{isSubmitSuccessful&&<p>접수되었습니다. 추후 tracking code가 발급됩니다.</p>}</form>}

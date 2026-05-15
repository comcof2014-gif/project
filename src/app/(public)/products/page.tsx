import Link from 'next/link'; import { products } from '@/lib/mock-data';
export default function Page(){return <div><h1 className='text-2xl font-bold mb-3'>보일러/배관자재</h1><ul className='space-y-2'>{products.map(p=><li key={p.id} className='bg-white p-3 rounded border'><Link href={`/products/${p.id}`}>{p.name}</Link><p>{p.publicPrice.toLocaleString()}원</p></li>)}</ul></div>}

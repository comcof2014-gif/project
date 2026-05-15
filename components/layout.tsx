import Link from 'next/link';
import { ReactNode } from 'react';
export function SiteLayout({children}:{children:ReactNode}) { return <div><header className='sticky top-0 bg-white border-b'><nav className='max-w-6xl mx-auto p-4 flex gap-3 text-sm'><Link href='/'>인스웨이</Link><Link href='/products'>상품</Link><Link href='/installation/request'>설치중개</Link><Link href='/business'>도매회원</Link><Link href='/installer/signup'>설치기사</Link><Link href='/admin'>관리자</Link></nav></header><main className='max-w-6xl mx-auto p-4'>{children}</main></div>; }

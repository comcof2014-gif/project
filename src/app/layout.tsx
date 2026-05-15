import './globals.css';
import Link from 'next/link';
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='ko'><body><header className='bg-white border-b'><nav className='max-w-6xl mx-auto p-4 flex gap-4 text-sm'><Link href='/'>인스웨이</Link><Link href='/products'>상품</Link><Link href='/installation/request'>설치중개 신청</Link><Link href='/admin'>관리자</Link></nav></header><main className='max-w-6xl mx-auto p-4'>{children}</main></body></html>}

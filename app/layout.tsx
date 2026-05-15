import './globals.css';
import Link from 'next/link';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="sticky top-0 z-10 border-b bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-3 text-sm">
            <Link href="/" className="font-bold">인스웨이</Link>
            <div className="flex gap-3">
              <Link href="/products">상품</Link><Link href="/installation/request">설치신청</Link><Link href="/admin">관리자</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-4">{children}</main>
      </body>
    </html>
  );
}

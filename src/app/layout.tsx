import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><header className="border-b bg-white"><nav className="container flex items-center justify-between py-3 text-sm"><Link href="/" className="font-bold">인스웨이</Link><div className="flex gap-3"><Link href="/products">상품</Link><Link href="/installation/request">설치신청</Link><Link href="/business">B2B</Link><Link href="/admin">관리자</Link></div></nav></header><main className="container py-6">{children}</main></body></html>;
}

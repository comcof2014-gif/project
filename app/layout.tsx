import './globals.css';
import { SiteLayout } from '@/components/layout';
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang='ko'><body><SiteLayout>{children}</SiteLayout></body></html>; }

import './globals.css';
import {Inter} from 'next/font/google';
import styles from './layout.module.css';
import Link from "next/link";
import {Metadata} from "next";

const inter = Inter({subsets: ['latin']})

/* SEO 기존에는 head.js를 사용했음  13버전 이후 metadata layout에 넣게되면 자식 컴포넌트에도 영향을줌 , page에 넣게되면 page에만 영향을줌 **/
export const metadata: Metadata = {
    title: '멋진 제품 사이트',
    description: '멋진 제품을 판매하는 곳입니다.',
    icons:{
        icon:'./favicon.ico'
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <header className={styles.header}>
            <h1>Demo Note</h1>
            <nav className={styles.nav}>
                <Link href='/products'>Products</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/about'>About</Link>
            </nav>
        </header>

        {children}
        </body>
        </html>
    )
}

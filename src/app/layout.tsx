import "./globals.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Meu Blog - Next.js",
  description: "Blog de exemplo feito com Next.js App Router e TypeScript",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: '1rem', borderBottom: '1px solid #eaeaea' }}>
          <h1>Meu Blog</h1>
        </header>
        <main style={{ maxWidth: 900, margin: '1rem auto', padding: '0 1rem' }}>{children}</main>
        <footer style={{ padding: '1rem', borderTop: '1px solid #eaeaea', marginTop: '2rem' }}>
          © {new Date().getFullYear()} Meu Blog
        </footer>
      </body>
    </html>
  );
}
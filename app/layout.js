import "./globals.css";
import logo from '../assets/vavada-logo.png';
import Image from "next/image";
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header className="header">
          <div className="container">
            <div className="logo"><Link className="link" href="/dyrupage">dYRu's</Link>  <Link href="/"><Image src={logo} width={300} height={50} alt={"logo"} /></Link></div>
            <nav className="navigation">
            </nav>
          </div>
        </header>
        <main className="main">
          <div className="container">
            {children}
          </div>
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Vavada. Wszelkie prawa zastrzeżone.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

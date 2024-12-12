import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header className="header">
          <div className="container">
            <div className="logo">dYRu's VAVADA</div>
            <nav className="navigation">
              <ul>
                <li><a href="#">Automaty do gier</a></li>
                <li><a href="#">Gry na żywo</a></li>
                <li><a href="#">Tabele</a></li>
                <li><a href="#">Turnieje</a></li>
              </ul>
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

import '../styles/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
      </body>
    </html>
  );
}

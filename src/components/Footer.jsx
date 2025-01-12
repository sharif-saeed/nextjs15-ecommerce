import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="/">
        <h1>Saeed Sharifi Academy</h1>
      </Link>
      <div className="social-media-links">
        <Link href="/cart">cart</Link>
        <a href="https://saeed-sharifi.ir/" target="_blank" rel="noopener noreferrer">Website </a>
        <a href="https://instagram.com/shariff_saeed" target="_blank" rel="noopener noreferrer"> Instagram</a>
        <a href="https://linkedin.com/in/shariff-saeed" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </div>
    </footer>
  );
}

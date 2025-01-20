import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Link from "next/link";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <Link href="/">
        <h1>Saeed Sharifi Academy</h1>
      </Link>
      <Link href="/cart" className="cartfooter"><FontAwesomeIcon icon={faShoppingCart} />cart</Link>
      <div className="social-media-links">
        
        <a href="https://saeed-sharifi.ir/" target="_blank" rel="noopener noreferrer">Website </a>
        <a href="https://instagram.com/shariff_saeed" target="_blank" rel="noopener noreferrer"> Instagram</a>
        <a href="https://linkedin.com/in/shariff-saeed" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Product({product}){
    return(
        <div className="product-item">
            <img src={product.image}  />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button>Add to cart</button>
            <Link href={`/${product.id}`}> View more</Link>
        </div>
    )
}
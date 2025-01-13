import Link from "next/link"

export default async function ProductDetail({params}){

    let {id} = params

   let res = await fetch(`https://fakestoreapi.com/products/${id}`)
   let product = await res.json()

    return(
        <div className="product-detail">

            <img src={product.image} />
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            <h5>{product.rating.rate}</h5>
            <p>{product.price}</p>

            <Link href="/">Back to shop</Link>
        </div>
    )
}
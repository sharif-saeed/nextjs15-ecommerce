import ProductList from "@/components/ProductList"

export default async function Home(){

   let res = await fetch("https://fakestoreapi.com/products/")
   let products = await res.json()

    return(
        <div className="home">
            <ProductList products={products}/>
        </div>
    )
}
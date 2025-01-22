import ProductList from "@/components/ProductList"

export function generateMetadata(){
    return {
        title: "Home | Your Online Shop",
        description: "Discover a wide range of amazing products.",
        openGraph: {
            title: "Home | Your Online Shop",
            description: "Explore top-quality products at your fingertips.",
        }
    }
}

export default async function Home(){

   let res = await fetch("https://fakestoreapi.com/products/")
   let products = await res.json()

    return(
        <div className="home">
            <ProductList products={products}/>
        </div>
    )
}
import Product from "./Product";

export default function ProductList({products}){
    return(
        <div className="product-list">
            {
                products.map(
                    (product)=> <Product key={product.id} product={product}/>
                )
            }
        </div>
    )
}
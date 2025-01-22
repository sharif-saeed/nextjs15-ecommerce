import CartClientSide from "./CartClientSide";

export function generateMetadata(){
    return {
        title: "Home | Your Online Cart",
        description: "View and manage the items in your cart.",
        openGraph: {
            title: "Your Online Cart",
            description: "Easily view and manage your shopping cart items.",
        }
    }    
}

export default function Cart(){
    return(
        <CartClientSide/>
    )
}
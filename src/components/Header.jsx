"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Link from "next/link";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Header() {

   const {data: session} = useSession()

   const [isrender, setIsRender] = useState(false)

   useEffect(
    ()=> setIsRender(true)
    , [])

    if(!isrender){
      return null
    }

  return (
    <header>
      <Link href="/">
        <h1>Saeed Sharifi Academy</h1>
      </Link>

      <Link href="/cart" className="cartheader">
        <FontAwesomeIcon icon={faShoppingCart} /> cart
      </Link>


      <div>
        {
          session?(
            <>
              <span>Hi {session.user.name} </span>
              <button onClick={()=>{signOut()}}>signOut</button>
            </>
          ):
          <button onClick={()=>signIn()}>signIn</button>
        }
      </div>


      <div className="social-media-links">
        <a href="https://saeed-sharifi.ir/" target="_blank" rel="noopener noreferrer">Website</a>
        <a href="https://instagram.com/shariff_saeed" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com/in/shariff-saeed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}

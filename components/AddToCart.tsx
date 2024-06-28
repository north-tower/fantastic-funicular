"use client"

import { useCartStore } from '@/store'
import { Organic } from '@/typings/searchTypings'
import { stat } from 'fs'
import React from 'react'

function AddToCart({product}: {product: Organic}) {
    const [cart, addToCart] = useCartStore((state) => [
        state.cart,
        state.addToCart,
    ]);

    console.log(cart);

    const howManyInCart = cart.filter(
        (item) => item.meta === product.meta
    ).length;

    console.log("How many in cart", howManyInCart);

    if(howManyInCart > 0) {


        

    }



  return (
    <div>AddToCart</div>
  )
}

export default AddToCart
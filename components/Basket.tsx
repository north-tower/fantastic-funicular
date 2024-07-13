"use client"

import { getCartTotal } from "@/lib/getCartTotal"
import { groupBySKU } from "@/lib/groupBySKU"
import { useCartStore } from "@/store"


function Basket() {
    const cart = useCartStore((state) => state.cart);
    const grouped = groupBySKU(cart);
    const basketTotal = getCartTotal(cart);

  
    console.log(grouped)
  return (
    <div>Basket</div>
  )
}

export default Basket
import { MouseEventHandler } from "react"

import { CartStore } from "../../stores"
import { Product } from "../../models"




function handleClickButton(product: Product, cart?: CartStore): MouseEventHandler {
  return (_event) => {
    if (cart) {
      cart.addProduct(product, 1)
    }
  }
}




export { handleClickButton }

import { createContext } from "react"

import { CartStore } from "../stores"
import { OrderStore } from "../stores"




const stores = {
  cart: new CartStore(),
  orders: new OrderStore()
}


const Context = createContext<typeof stores | undefined>(undefined)




export { Context, stores }

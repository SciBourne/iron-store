import { createContext } from "react"
import { CartStore } from "../stores"




const stores = {
  cart: new CartStore()
}


const Context = createContext<typeof stores | undefined>(undefined)




export { Context, stores }

import { ObjectId } from "mongodb"




interface CartItem {
  productID: ObjectId,
  amount: number
}


interface Cart {
  sessionID: string
  products: CartItem[]
}




export { CartItem, Cart }

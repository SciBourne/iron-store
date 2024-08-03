import { ObjectId } from "mongodb"
import { Product } from "./product"




interface CartItem {
  _id: ObjectId
  qty: number

}


interface Cart {
  _id: ObjectId
  content: CartItem[]
}


interface CartItemDetails extends Product {
  qty: number
}


interface AggData {
  cart: Cart
  products: Product[]
}



export {

  Cart,
  CartItem,
  CartItemDetails,
  AggData

}

import { action, computed, observable, runInAction } from "mobx"

import { CartItemDetails, Product } from "../models"
import { cart } from "../services"




class CartStore {
  @observable accessor localCart: CartItemDetails[] = []

  constructor() {
    setTimeout(
      () => {
        cart.getCart()
              .then(
                (cart) => {
                  runInAction(() => this.localCart = cart)
                }
              )
      },

      1000
    )
  }

  getItem(productID: string): CartItemDetails | undefined {
    return this.localCart.find(
      item => productID === item._id
    )
  }

  @computed
  get content(): CartItemDetails[] {
    var result: CartItemDetails[] = []

    this.localCart.forEach(
      (item) => {
        result.push(item)
      }
    )

    return result
  }

  @computed
  get total(): number {
    var totalQty = 0

    this.localCart.forEach(
      (item) => {
        totalQty += item.qty
      }
    )

    return totalQty
  }

  @computed
  get amount(): number {
    var amountPrice = 0

    this.localCart.forEach(
      (item) => {
        amountPrice += item.price * item.qty
      }
    )

    return amountPrice
  }

  @action
  addProduct(product: Product, qty: number) {
    cart.addProduct(product._id, qty)
          .then(
            (status) => {
              if (status) {
                runInAction(
                  () => this.localCart.push({ ...product, qty })
                )
              }
            }
          )
  }

  @action
  remProduct(productID: string) {
    cart.remProduct(productID)
          .then(
            (status) => {
              if (status) {
                runInAction(
                  () => this.localCart = this.localCart.filter(
                    item => item._id != productID
                  )
                )
              }
            }
          )
  }

  @action
  incProductQty(productID: string) {
    let item = this.getItem(productID)

    if (item) {
      item.qty++
      cart.updateProductQty(productID, item.qty)
            .then((status) => status ? null : runInAction(() => item.qty--))
            .catch(() => runInAction(() => item.qty--))
    }
  }

  @action
  decProductQty(productID: string) {
    let item = this.getItem(productID)

    if (item) {
      item.qty--
      cart.updateProductQty(productID, item.qty)
            .then((status) => status ? null : runInAction(() => item.qty++))
            .catch(() => runInAction(() => item.qty++))
    }
  }
}




export { CartStore }

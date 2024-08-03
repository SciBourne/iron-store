import { ObjectId } from "mongodb"

import { db } from "."
import { AggData, CartItem, CartItemDetails } from "../models/cart"
import { Product } from "../models"




async function getCart(userID: ObjectId): Promise<CartItemDetails[]> {
  const result: CartItemDetails[] = []

  const pipeline = [
    {
      $match: {
        _id: userID
      }
    },

    {
      $lookup: {
        from: "products",
        localField: "content._id",
        foreignField: "_id",
        as: "data"
      }
    }
  ]

  const aggData = await db.get().collection("carts")
                                  .aggregate<AggData>(pipeline)
                                  .next()

  if (aggData) {
    aggData.cart.content.forEach(
      (item: CartItem) => {
        let product = aggData.products.find(
          (product: Product) => item._id.equals(product._id)
        )

        if (product) {
          result.push({...product, qty: item.qty})

        } else {
          throw new Error("Check the cart products id")
        }
      }
    )
  }

  return result
}




async function getCartItem(

  userID: ObjectId,
  productID: ObjectId

): Promise<CartItemDetails | null> {

  const pipeline = [
    {
      $match: {
        _id: userID
      }
    },

    {
      $project: {
        _id: 0,

        cartData: {

          $filter: {
            input: "$content",
            as: "item",

            cond: {
              $eq: [
                "$$item._id",
                productID
              ]
            }

          }
        }
      }
    },

    {
      $lookup: {
        from: "products",
        localField: "cartData._id",
        foreignField: "_id",
        as: "productDetails"
      }
    },

    { $unwind: "$cartData" },
    { $unwind: "$productDetails" },

    {
      $project: {
        data: {
          $mergeObjects: [
            "$cartData",
            "$productDetails"
          ]
        }
      }
    }
  ]

  const productDetails = (
    await db.get().collection("carts")
                    .aggregate<{ data: CartItemDetails }>(pipeline)
                    .next()
  )

  return productDetails ? productDetails.data : null
}




async function addToCart(

  userID: ObjectId,
  item: CartItem

): Promise<boolean> {

  const findParams = {
    _id: userID
  }

  const updateParams = {
    $push: {
      content: item
    }
  }

  const options = {
    upsert: true
  }

  const result = await db.get().collection("carts")
                                  .updateOne(
                                    findParams,
                                    updateParams as Record<string, any>,
                                    options
                                  )

  return result.acknowledged

}




async function remFromCart(

  userID: ObjectId,
  productID: ObjectId

): Promise<boolean> {

  const findParams = {
    _id: userID
  }

  const updateParams = {
    $pull: {
      content: {
        _id: productID
      }
    }
  }

  const result = await db.get().collection("carts")
                                  .updateOne(
                                    findParams,
                                    updateParams as Record<string, any>
                                  )

  return result.acknowledged
}




async function updateQty(

  userID: ObjectId,
  productID: ObjectId,
  newQty: number

): Promise<boolean> {

  const findParams = {
    _id: userID
  }

  const updateParams = {
    $set: {
      "content.$[product].qty": newQty
    }
  }

  const options = {
    arrayFilters: [
      {
        "product._id": productID
      }
    ]
  }

  const result = await db.get().collection("carts")
                                  .updateOne(findParams, updateParams, options)

  return result.acknowledged
}




export {

  getCart,
  getCartItem,
  addToCart,
  remFromCart,
  updateQty

}

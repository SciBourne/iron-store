import { useLocation, useOutletContext, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import {
  ProductBalance,
  ProductDescription,
  ProductImage,
  ProductLabel,
  PriceBox
} from "../../shared"

import { Product } from "../../models"
import { catalog } from "../../services"
import { PageNotFound } from "../errors"




function ProductDetails(): JSX.Element {
  const [_, setVisibleProduct] = useOutletContext<[boolean, Function]>()
  const [product, setProduct] = useState<Product>({} as Product)

  const path: string = useLocation().pathname
  const ID = path.split("/")[2]
  const category = path.split("/")[2]

  const params = useParams()

  useEffect(
    () => {
      catalog.getProduct(category, ID, setProduct)
      setVisibleProduct(true)

      return () => setVisibleProduct(false)
    },

    []
  )

  const result: JSX.Element = (
    <div className="product-page">
      <ProductImage id={params.productID as string}
                    category={ params.categoryName as string} />
      <div className="info">
        <ProductLabel vendor={ product.vendor }
                      model={ product.model } />
        <ProductDescription style="short" content={ product.shortDescription } />
        <PriceBox theme="dark" price={ product.price } />
        <ProductBalance balance={ product.balance } />
        <ProductDescription content={ product.description } />
      </div>
    </div>
  )

  return (
    <>
      { product ? result : <PageNotFound /> }
    </>
  )
}




export default ProductDetails

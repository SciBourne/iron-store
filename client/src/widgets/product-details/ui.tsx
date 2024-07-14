import { useOutletContext, useParams } from "react-router-dom"
import { useEffect } from "react"

import {
  ProductBalance,
  ProductDescription,
  ProductImage,
  ProductLabel,
  PriceBox
} from "../../shared"





function ProductDetails(): JSX.Element {
  const [_, setVisibleProduct] = useOutletContext<[boolean, Function]>()
  const params = useParams()


  useEffect(
    () => {
      setVisibleProduct(true)
      return () => setVisibleProduct(false)
    },

    []
  )

  return (
    <div className="product-page">
      <ProductImage id={params.productID as string}
                    category={ params.categoryName as string} />
      <div className="info">
        <ProductLabel vendor={ video[0].vendor }
                      model={ video[0].model } />
        <ProductDescription style="short" content={ video[0].shortDescription } />
        <PriceBox theme="dark" price={ video[0].price } />
        <ProductBalance balance={ video[0].balance } />
        <ProductDescription content={ video[0].description } />
      </div>
    </div>
  )
}




export default ProductDetails

import { Outlet, useOutletContext, useParams } from "react-router-dom"
import { CategoryNames, Product } from "../../models"
import { PageNotFound, ProductsNotFound } from "../errors"
import { useState } from "react"
import { Paginator, ProductCard } from "../../shared"




function ProductsList(): JSX.Element {
  const categoryName: string = useParams().categoryName as string
  const [startPage, setStartPage] = useState(0)
  const [visibleProduct, setVisibleProduct] = useOutletContext<[boolean, Function]>()

  if ( !CategoryNames.has(categoryName) ) {
    return <PageNotFound />
  }

  let products: Product[]

  switch ( categoryName ) {
    case "videocards":
      products = video
      break;

    default:
      return <ProductsNotFound />
  }

  const amountProducts: number = products.length

  const result: JSX.Element = (
    <div className="product-list">
      <h2 className="category-name">
        { CategoryNames.get(categoryName) }
      </h2>

      <div className="product-grid">
        {
          products.slice(startPage, startPage + 4).map(
            (product: Product) => (
              <ProductCard { ...product } key={ product.id } />
            )
          )
        }
      </div>

      <Paginator  amountProducts={ amountProducts }
                  startPage={ startPage }
                  toggleStartPage={ setStartPage } />

    </div>
  )

  return (
    <>
      { !visibleProduct ? result : null }
      <Outlet context={ [visibleProduct, setVisibleProduct] }/>
    </>
  )
}




export default ProductsList

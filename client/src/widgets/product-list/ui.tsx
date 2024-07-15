import { Outlet, useOutletContext, useParams } from "react-router-dom"
import { CategoryNames, Product } from "../../models"
import { PageNotFound, ProductsNotFound } from "../errors"
import { useEffect, useState } from "react"
import { Paginator, ProductCard } from "../../shared"
import { catalog } from "../../services"




interface listHeaderProps {
  category: string
}


function ListHeader(props: listHeaderProps): JSX.Element {
  return (
    <h2 className="category-name">
      { CategoryNames.get(props.category) }
    </h2>
  )
}




interface generateProductListProps {
  products: Product[]
  startPage: number
}


function ListContent(props: generateProductListProps): JSX.Element {
  return (
    <div className="product-grid">
      {
        props.products.slice(props.startPage, props.startPage + 4).map(
          (product: Product) => (
            <ProductCard { ...product } key={ product._id } />
          )
        )
      }
    </div>
  )
}




function ProductsList(): JSX.Element {
  const categoryName: string = useParams().categoryName as string

  const [visibleProduct, setVisibleProduct] = useOutletContext<[boolean, Function]>()
  const [startPage, setStartPage] = useState(0)
  const [products, setProducts] = useState<Product[]>([])

  if ( !CategoryNames.has(categoryName) ) {
    return <PageNotFound />
  }

  useEffect(
    () => catalog.updateProductList(categoryName, setProducts),
    [ categoryName ]
  )

  if ( products.length === 0 ) {
    return <ProductsNotFound />
  }

  const result: JSX.Element = (
    <div className="product-list">
      <ListHeader category={ categoryName } />

      <ListContent products={ products }
                   startPage={ startPage } />

      <Paginator  amountProducts={ products.length }
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

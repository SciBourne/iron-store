import { Product, video } from "../../models/products"
import { PriceBox, ProductImage } from "../../shared"




function RecomendedList(): JSX.Element {
  return (
    <section className="content recomended-list">
      <h2>Рекомендуемое</h2>
      <div className="recomended-list-grid">
        {
          video.slice(0, 6).map(
            (product: Product) => (
              <article className="product-mini" key={ product.id }>

                <ProductImage id={ product.id }
                              category={ product.category }
                              isLink={ true } />

                <PriceBox theme="dark-popup"
                          price={ product.price } />

                <p className="description"> { product.shortDescription } </p>
              </article>
            )
          )
        }
      </div>
    </section>
  )
}




export default RecomendedList

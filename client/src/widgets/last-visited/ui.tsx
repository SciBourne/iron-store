import { Product, video } from "../../entities/products"
import { PriceBox, ProductImage } from "../../shared"




function LastVisited(): JSX.Element {
  return (
    <section className="content last-visited">
      <h2>Недавно смотрели</h2>
      <div className="last-visited-grid">
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




export default LastVisited

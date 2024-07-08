import { Link } from "react-router-dom"
import { ROOT_PRODUCT_IMAGE as ROOT_IMG } from "../../config"
import { Product } from "../../entities"

import { PriceBox } from ".."




interface productImageProps {
  id: string
  category: string
  isLink?: boolean
}

function ProductImage(props: productImageProps): JSX.Element {
  const image: JSX.Element = (
    <img  className="product-image"
          src={ `${ROOT_IMG}/${ props.category }/A-1.png` }
          alt={ props.id } />
  )

  if ( props.isLink ) {
    return (
      <Link className="product-image"
            to={`/catalog/${props.category}/${ props.id }`}>
        { image }
      </Link>
    )
  } else { return image }
}



interface productLabelProps {
  vendor: string
  model: string
}

function ProductLabel(props: productLabelProps): JSX.Element {
  return (
    <div className="card-label">
      <span className="vendor">
        { props.vendor }
      </span>
      <span className="model">
        { props.model }
      </span>
    </div>
  )
}



interface productDescriptionProps {
  style?: string
  content: string
}

function ProductDescription(props: productDescriptionProps): JSX.Element {
  let textStyle: string
  let header: undefined | JSX.Element
  let content: string | JSX.Element[]

  switch (props.style) {
    case "short":
      textStyle = "short-description"
      content = props.content
      break;

    default:
      textStyle = "description"
      header = <h2>Описание</h2>
      content = props.content
                       .split('\n')
                       .map( (line, index) => <p key={ index }>{ line }</p>)
      break;
  }

  return (
    <>
      { header }
      <p className={ textStyle }>
        { content }
      </p>
    </>
  )
}



interface productBalanceProps {
  balance: number
}

function ProductBalance(props: productBalanceProps): JSX.Element {
  return (
    <p className="product-balance">
      Осталось: <span>{ props.balance } шт</span>
    </p>
  )
}



interface productInfo {
  vendor: string
  model: string
  shortDescription: string
  balance: number
}

function ProductInfo(props: productInfo): JSX.Element {
  return (
    <div className="info">
      <ProductLabel vendor={ props.vendor } model={ props.model } />
      <ProductDescription style="short" content={ props.shortDescription } />
      <ProductBalance balance={ props.balance } />
    </div>
  )
}



function ProductCard(props: Product): JSX.Element {
  return (
    <article className="product">
      <ProductImage id={ props.id }
                    category={ props.category }
                    isLink={ true } />

      <ProductInfo  vendor={ props.vendor }
                    model={ props.model }
                    balance={ props.balance }
                    shortDescription={ props.shortDescription } />

      <PriceBox price={ props.price } />
    </article>
  )
}




export {
   ProductCard,
   ProductImage,
   ProductLabel,
   ProductInfo,
   ProductDescription,
   ProductBalance
}

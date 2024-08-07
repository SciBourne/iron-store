import { observer } from "mobx-react"

import { handleClickButton } from "../handlers/price-box"
import { useContext } from "react"
import { Context } from "../../context"
import { Product } from "../../models"




interface priceProps {
  value: number
}

function Price(props: priceProps): JSX.Element {
  return (
    <span className="price">
      { props.value ? props.value.toLocaleString("RU-ru") : "0" } ₽
    </span>
  )
}




function CartIcon(): JSX.Element {
  return (
    <img className="cart-icon"
         src="/img/cart-plus.svg"
         alt="Корзина" />
  )
}


const ButtonStore = observer(
  (props: { product: Product }): JSX.Element => {
    const cart = useContext(Context)?.cart

    const activeContent = "В КОРЗИНУ"
    const disabledContent = "ДОБАВЛЕНО"

    return (
      <button onClick={ handleClickButton(props.product, cart) }
              disabled={ cart?.getItem(props.product._id) ? true : false }
              className="button-store"
              type="button">

        { cart?.getItem(props.product._id) ? disabledContent : activeContent }

      </button>
    )
  }
)




function PriceBox(props: { product: Product, theme?: string }): JSX.Element {
  const theme: string = props.theme ? "-" + props.theme : ""

  let containerStyle: string = "price-box" + theme
  let payloadContent: JSX.Element

  switch ( props.theme ) {
    case "dark":
      payloadContent = (
        <>
          <Price value={ props.product.price } />
          <CartIcon />
        </>
      )

      break;

    case "dark-popup":
      payloadContent = (
        <>
          <Price value={ props.product.price } />
          <CartIcon />
        </>
      )

      break;

    default:
      payloadContent = (
        <>
          <CartIcon />
          <Price value={ props.product.price } />
        </>
      )

      break;
  }

  return (
    <form className={ containerStyle } >
      <div className="payload">
        { payloadContent }
      </div>
      <ButtonStore product={ props.product } />
    </form>
  )
}




export default PriceBox

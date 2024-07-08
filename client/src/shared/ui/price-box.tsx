interface priceProps {
  value: number
}

function Price(props: priceProps): JSX.Element {
  return (
    <span className="price">
      { props.value.toLocaleString("RU-ru") } ₽
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



interface buttonStoreProps {
  content: string
}

function ButtonStore(props: buttonStoreProps): JSX.Element {
  return (
    <button className="button-store" type="button" >
      { props.content }
    </button>
  )
}



interface priceBoxProps {
  price: number
  theme?: string
}

function PriceBox(props: priceBoxProps): JSX.Element {
  const theme: string = props.theme ? "-" + props.theme : ""

  let containerStyle: string = "price-box" + theme
  let buttonContent: string = "В КОРЗИНУ"
  let payloadContent: JSX.Element

  switch ( props.theme ) {
    case "dark":
      payloadContent = (
        <>
          <Price value={ props.price } />
          <CartIcon />
        </>
      )

      break;

    case "dark-popup":
      payloadContent = (
        <>
          <Price value={ props.price } />
          <CartIcon />
        </>
      )

      break;

    default:
      payloadContent = (
        <>
          <CartIcon />
          <Price value={ props.price } />
        </>
      )

      break;
  }

  return (
    <form className={ containerStyle } >
      <div className="payload">
        { payloadContent }
      </div>
      <ButtonStore content={ buttonContent } />
    </form>
  )
}




export default PriceBox

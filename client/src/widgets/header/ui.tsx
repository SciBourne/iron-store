import { NavLink } from "react-router-dom"
import Logo from "../../shared/ui/logo"
import Phone from "../../shared/ui/phone"




function Header(): JSX.Element {
  return (
    <header>
      <div className="content">
        <Logo styleClass="logo-s" />
        <Phone number="+79991234567" />
        <TopMenu />
      </div>
    </header>
  )
}



function TopMenu(): JSX.Element{
  return (
    <div className="top-menu">

      <NavLink to="/profile">
        <img src="/img/user-profile.svg" alt="Профиль пользователя" />
      </NavLink>

      <NavLink to="/cart">
        <img src="/img/cart.svg" alt="Корзина товаров" />
      </NavLink>

    </div>
  )
}




export default Header

import { Location, Cart, HeaderContent } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContent>
      <img src={logo} alt="" />
      <nav>
        <Location to="/">
          <MapPin size={24} />
          São Jerônimo, RS
        </Location>
        <Cart to="cart" title="Carrinho">
          <ShoppingCart size={24} />
        </Cart>
      </nav>
    </HeaderContent>
  )
}
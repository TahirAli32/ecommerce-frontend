import '../styles/Navbar.scss'
import { MdKeyboardArrowDown, MdOutlineFavoriteBorder, MdOutlinePerson, MdOutlineShoppingCart, MdSearch } from "react-icons/md"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const products = useSelector(state => state.cart.products)

  const [cart, showCart] = useState(false)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <MdKeyboardArrowDown />
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to='/'>STORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to='/about'>About</Link>
          </div>
          <div className="item">
            <Link className='link' to='/store'>Stores</Link>
          </div>
          <div className="item">
            <Link className='link' to='/contact'>Contact</Link>
          </div>
          <div className="icons">
            <MdSearch className='iconSize' />
            <MdOutlinePerson className='iconSize' />
            <MdOutlineFavoriteBorder className='iconSize' />
            <div className="cartIcon" onClick={() => showCart(!cart)}>
              <MdOutlineShoppingCart className='iconSize' />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {cart && <Cart />}
    </div>
  )
}

export default Navbar
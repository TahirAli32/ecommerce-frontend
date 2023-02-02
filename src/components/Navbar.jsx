import '../styles/Navbar.scss'
import { MdKeyboardArrowDown, MdOutlineFavoriteBorder, MdOutlinePerson, MdOutlineShoppingCart, MdSearch } from "react-icons/md"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <MdKeyboardArrowDown />
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Children</Link>
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
            <div className="cartIcon">
              <MdOutlineShoppingCart className='iconSize' />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
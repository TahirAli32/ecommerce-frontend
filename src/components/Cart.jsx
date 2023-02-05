import '../styles/Cart.scss'
import { MdOutlineDelete }  from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../redux/cartReducer'

const Cart = () => {

  const BACKEND_URL = process.env.REACT_APP_API_URL

  const products = useSelector(state => state.cart.products)

  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0
    products.forEach(item => total += item.quantity * item.price)
    return total.toFixed(2)
  }

  return (
    <div className='cart'>
      <div className="top">
        <h1>Products in Your Cart</h1>
        <span className="reset" onClick={()=> dispatch(resetCart())}>Reset Cart</span>
      </div>
      {products?.map(item => (
        <div className='itemCard' key={item.id}>
          <div className="item">
            <img src={BACKEND_URL + item.img} alt="img" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 100)}...</p>
              <div className="price">{item.quantity} x ${item.price}</div>
            </div>
          </div>
            <span><MdOutlineDelete onClick={()=> dispatch(removeItem(item.id))} style={{cursor: 'pointer'}} size={30} color='red' /></span>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button style={products.length ? { backgroundColor: '#2879fe' } : { backgroundColor: '#8a8a8a' }}>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default Cart
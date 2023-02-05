import '../styles/Cart.scss'
import { MdOutlineDelete }  from 'react-icons/md'

const Cart = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit atque sunt sequi iusto voluptates distinctio tempora soluta quidem? Reprehenderit doloremque iusto quasi ex, eum labore dicta quas commodi ipsa numquam.",
      isNew: true,
      odlPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shoes are Shoes",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit atque sunt sequi iusto voluptates distinctio tempora soluta quidem? Reprehenderit doloremque iusto quasi ex, eum labore dicta quas commodi ipsa numquam.",
      isNew: true,
      odlPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shoes are Shoes",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit atque sunt sequi iusto voluptates distinctio tempora soluta quidem? Reprehenderit doloremque iusto quasi ex, eum labore dicta quas commodi ipsa numquam.",
      isNew: true,
      odlPrice: 19,
      price: 12
    },
  ]
  return (
    <div className='cart'>
      <div className="top">
        <h1>Products in Your Cart</h1>
        <span className="reset">Reset Cart</span>
      </div>
      {data.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}...</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <MdOutlineDelete style={{cursor: 'pointer'}} size={40} color='red' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$12</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default Cart
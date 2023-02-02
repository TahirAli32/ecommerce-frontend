import { useState } from 'react'
import '../styles/Product.scss'
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md"

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="img" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="img" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="img" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, minima laudantium veniam facilis iure itaque iste aliquid corporis perspiciatis esse accusantium harum voluptatem quisquam dolor tenetur nulla expedita, quibusdam aliquam consectetur eveniet delectus illum sunt odio? Assumenda, exercitationem sequi in error incidunt id necessitatibus expedita, quae ipsam cupiditate sint ipsa!
        </p>
        <div className="quantity">
          <button onClick={e => setQuantity(current => current === 1 ? 1 : current - 1)}>-</button>
          {quantity}
          <button onClick={e => setQuantity(current => current === 100 ? 100 : current + 1)}>+</button>
        </div>
        <button className="add">
          <MdOutlineShoppingCart size={20} /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <MdOutlineFavoriteBorder size={16} />ADD TO WISHLIST
          </div>
        </div>
        <div className="info">
          <span>Vendor: A Name</span>
          <span>Product-Type: A Prodcut</span>
          <span>Tag: T-shirt, shirt</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
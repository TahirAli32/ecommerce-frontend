import { useState } from 'react'
import '../styles/Product.scss'
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md"
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Product = () => {

  const BACKEND_URL = process.env.REACT_APP_API_URL

  const categoryID = parseInt(useParams().id)

  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)

  const {data, loading, error} = useFetch(`/api/products/${categoryID}?populate=*`)

  return (
    <>
      {loading ? <h1 style={{textAlign: 'center'}}>Loading</h1> :
        <div className='product'>
          <div className="left">
            <div className="images">
              <img src={BACKEND_URL + data?.attributes?.img?.data?.attributes?.url} alt="img" onClick={e => setSelectedImg("img")} />
              <img src={BACKEND_URL + data?.attributes?.img2?.data?.attributes?.url} alt="img2" onClick={e => setSelectedImg("img2")} />
            </div>
            <div className="mainImg">
              <img src={BACKEND_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="img" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button onClick={() => setQuantity(current => current === 1 ? 1 : current - 1)}>-</button>
              {quantity}
              <button onClick={() => setQuantity(current => current === 100 ? 100 : current + 1)}>+</button>
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
      }
    </>
  )
}

export default Product
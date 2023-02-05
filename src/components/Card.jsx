import { Link } from 'react-router-dom'
import '../styles/Card.scss'

const Card = ({item}) => {

  const BACKEND_URL = process.env.REACT_APP_API_URL

  return (
    <Link to={`/product/${item.id}`} className='link'>
      <div className='card'>
        <div className="image">
          {item.attributes.isNew && <span>New Season</span>}
          <img src={BACKEND_URL + item?.attributes.img.data.attributes.url} alt="img" className="mainImg" />
          {item?.attributes.img2.data.attributes.url && <img src={BACKEND_URL + item?.attributes.img2.data.attributes.url} alt="img" className="secondImg" />}
        </div>
        <h2>{item.attributes.title}</h2>
        <div className="prices">
          {item.attributes.oldPrice && <h3 className='oldPrice'>${item.attributes.oldPrice}</h3>}
          <h3>${item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
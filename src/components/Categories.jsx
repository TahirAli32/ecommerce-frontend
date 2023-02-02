import { Link } from 'react-router-dom'
import '../styles/Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
          <Link to='/products/1' className='link'>
            <button>Sale</button>
          </Link>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
          <Link to='/products/2' className='link'>
            <button>Sale</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
          <Link to='/products/3' className='link'>
            <button>Sale</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
              <Link to='/products/4' className='link'>
                <button>Sale</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
              <Link to='/products/5' className='link'>
                <button>Sale</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
          <Link to='/products/6' className='link'>
            <button>Sale</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
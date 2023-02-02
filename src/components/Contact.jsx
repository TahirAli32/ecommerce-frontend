import '../styles/Contact.scss'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="email">
          <input type="text" placeholder='Enter your Email' />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsYoutube />
        </div>
      </div>
    </div>
  )
}

export default Contact
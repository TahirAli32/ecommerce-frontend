import { useState } from 'react'
import { MdOutlineEast, MdOutlineWest } from 'react-icons/md'
import '../styles/Slider.scss'

const Slider = () => {

  const [current, setCurrent] = useState(0)

  const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ]

  const prevSlide = () => {
    setCurrent(current === 0 ? 2 : prev => prev - 1)
  }
  
  const nextSlide = () => {
    setCurrent(current === 2 ? 0 : prev => prev + 1)
  }

  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${current * 100}vw)`}}>
        <img src={data[0]} alt="img" />
        <img src={data[1]} alt="img" />
        <img src={data[2]} alt="img" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}><MdOutlineWest /></div>
        <div className="icon" onClick={nextSlide}><MdOutlineEast /></div>
      </div>
    </div>
  )
}

export default Slider
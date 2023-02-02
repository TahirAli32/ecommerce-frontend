import '../styles/List.scss'
import Card from './Card'

const List = ({categoryID, maxPrice, sort}) => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      isNew: true,
      odlPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      isNew: true,
      odlPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      isNew: true,
      odlPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      isNew: true,
      odlPrice: 19,
      price: 12
    },
  ]

  return (
    <div className='list'>
      {data?.map(item => (
        <Card item={item} key ={item.id} />
      ))}
    </div>
  )
}

export default List
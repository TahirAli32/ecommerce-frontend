import '../styles/FeaturedProducts.scss'
import Card from './Card'

const FeaturedProducts = ({type}) => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long Sleeve Graphics T Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
  ]

  return (
    <div className='featureProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil commodi eaque quia autem necessitatibus laborum repudiandae facilis adipisci ducimus ratione, facere pariatur quod cumque laudantium nesciunt quos error eum.</p>
      </div>
      <div className="bottom">
        {data?.map((item, index)=>(
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
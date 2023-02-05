import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../components/List'
import '../styles/Products.scss'
import useFetch from '../hooks/useFetch'

const Products = () => {

  const categoryID = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(100)
  const [sort, setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const {data, loading, error} = useFetch(`/api/sub-categories?[filters][categories][id][$eq]=${categoryID}`)

  const handleCategory = ({target}) => {
    const { value, checked } = target
    setSelectedSubCats(checked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value))
  }

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {loading ? 'Loading' : data?.map(item =>(
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleCategory} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
          {error && <p>{error.message}</p>}
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={100} value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={e => setSort("asc")} />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc" value="desc" onChange={e => setSort("desc")} />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='categoryImage' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
        <List categoryID={categoryID} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products
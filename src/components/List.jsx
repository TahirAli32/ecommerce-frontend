import '../styles/List.scss'
import Card from './Card'
import useFetch from '../hooks/useFetch'

const List = ({categoryID, maxPrice, sort, subCats}) => {

  const {data, loading, error} = useFetch(`/api/products?populate=*&[filters][categories][id][$eq]=${categoryID}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`).join('')}&sort=price:${sort}`)

  // Price Range: `&[filters][price][$lte]=${maxPrice}`

  return (
    <div className='list'>
      {loading ? 'Loading' : data?.map(item => (
        <Card item={item} key ={item.id} />
      ))}
      {error && error.message}
    </div>
  )
}

export default List
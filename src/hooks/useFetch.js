import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"

const useFetch = (url) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await makeRequest.get(url)
        setData(res.data.data)
        setError(false)
      } catch (error) {
        setError(error.response.data.error)
        setData([])
      }
      setLoading(false)
    }
    fetchProducts()
  }, [url])

  return { data, loading, error}
}

export default useFetch
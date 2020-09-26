import fetcher from "../lib/fetcher"
import useSWR from "swr"
const Query = () => {
  const { data: products } = useSWR(process.env.API_URL + "/products", fetcher)

  if (!products) return null

  return (
    <div>
      {products}
    </div>
  )
}

export default Query
import useSWR from "swr"
import { useState } from "react"

const fetcher = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => res.json())
}

const QueryState = () => {
  const [name, setName] = useState("")
  useSWR(process.env.API_URL + "/users/me", fetcher, {
    onSuccess: async (meData) => {

      if (meData.firstName) setName(meData.firstName)

    },
    onError: async (error) => {
      console.log(error)
    }
  })

  return (
    <div>
      {name}
    </div>
  )
}
export default QueryState
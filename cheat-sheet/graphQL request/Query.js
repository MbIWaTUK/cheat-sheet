import { gql, useQuery } from "@apollo/client"
import React, { useState } from "react"

const DIRECTIONS = gql`
  query Directions($type: DirectionType!) {
    directions(type: $type) {
      _id
    }
  }
`
const Query = () => {
  const [type, setType] = useState(null)

  const { data: newData, loading, refetch } = useQuery(DIRECTIONS, { variables: { type: type } })

  if (loading) {
    return <h2>загрузка</h2>
  }

  const handler = (value) => {
    refetch({ type: value })
  }

  if (!newData) return null

  return (
    <div>
      {newData && newData.directions ? <p>{newData.directions._id}</p> : "not data"}
      <button onClick={() => handler(true)}>Click</button>
    </div>
  )
}

export default Query
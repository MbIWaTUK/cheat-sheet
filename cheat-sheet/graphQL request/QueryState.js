import { gql, useQuery } from "@apollo/client"
import React, { useState } from "react"

const QUERY = gql`
  query GetEventInfoForTab1($id: ID!) {
    getEventInfoForTab1(id: $id) {
      info
    }
  }
`
const QueryState = ({ id }) => {

  const [info, setInfo] = useState(null)

  useQuery(QUERY, {
    skip: id ? false : true,
    variables: { id },
    onCompleted: (data) => {
      if (data) {
        setInfo(
          data.getEventInfoForTab1.info
            ? data.getEventInfoForTab1.info
            : "not info"
        )
      }
    },
    onError: (err) => console.log(err),
  })

  return (
    <div>
      {info}
    </div>
  )
}

export default QueryState
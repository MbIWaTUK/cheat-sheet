import { useState, useEffect } from "react"

const useLocalState = (key) => {
  const [json, setJson] = useState([])

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem(key))
    if (json) {
      setJson(json)
    }
  }, [])

  const updateJson = (newItem) => {
    const s = JSON.stringify(newItem)
    localStorage.setItem(key, s)
    setJson(newItem)
  }

  return [json, updateJson]
}

export default useLocalState
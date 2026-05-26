import React, { useEffect, useState } from 'react'
import axios from 'axios'

function fetchData() {
  return axios
    .get(`https://swapi.info/api/people`)
    .then((res) => {
      console.log("API response:", res.data)
      return res.data
    })
    .catch((err) => {
      console.log("API error:", err)
      return []
    })
}

const Characters = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
      .then((results) => {
        setData(results)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (data.length === 0) return <div>No characters found</div>

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  )
}

function StarWars() {
  return (
    <div>
      <Characters />
    </div>
  )
}

export default StarWars

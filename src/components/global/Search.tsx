import React from 'react'
import { useRouter } from 'next/router'
const Search = () => {
    const router = useRouter()
    console.log(router)
  return (
    <div>Search</div>
  )
}

export default Search
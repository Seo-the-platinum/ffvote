import React, { useEffect, useState } from 'react'
import { api } from '../../utils/api'
import type { ChangeEvent } from 'react';
import { useRouter } from 'next/router'
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const router = useRouter()
  const [ search,  setSearch ] = useState('')
  const { data: characters } = api.ff.getCharacter.useQuery({ name: `${search}`})

  const handleSearch = (e:ChangeEvent)=> {
    setSearch(e.target.value)
  }
    console.log(characters)
  return (
    <div className='border-2 border-slate-800 absolute rounded-xl flex items-center bg-white sm:w-2/4 md:static md:w-2/4 lg:w-2/6'>
      <input className='w-full rounded-tl-xl pl-2 rounded-bl-xl self-center focus:outline-none' type='text' maxLength={20} onChange={handleSearch}/>
      <BsSearch className='bg-white rounded-r-xl' size='1.25em'/>
    </div>
  )
}

export default Search
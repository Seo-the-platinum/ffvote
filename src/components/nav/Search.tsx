import React, { useEffect, useRef, useState } from 'react'
import { api } from '../../utils/api'
import type { ChangeEvent } from 'react';
import { useRouter } from 'next/router'
import { BsSearch } from "react-icons/bs";
import Image from 'next/image'
import Link from 'next/link'

const Search = () => {
  const router = useRouter()
  const [ search,  setSearch ] = useState('')
  const { data: characters } = api.ff.getCharacter.useQuery({ name: `${search}`}, {enabled:!!search.length})
  const [focusedIndex, setFocusedIndex ] = useState(-1)
  const resultContainer = useRef(null)
  const handleSearch = (e:ChangeEvent)=> {
    setSearch(e.target.value)
  }
  const clearSearch = ()=> {
    setSearch('')
  }

  useEffect(()=> {
    if (!resultContainer.current) return;
    resultContainer?.current?.scrollIntoView({block: 'center'})
  },[focusedIndex])

  const handleKeyDown = async (e)=> {
    console.log('keydown firing', focusedIndex)
    const { key } = e
    let nextIndex = 0
    if (key === 'ArrowDown' && characters) {
      nextIndex = (focusedIndex + 1) % characters.length
    }

    if (key === 'ArrowUp' && characters) {
      if (focusedIndex < 0) nextIndex = -1
      else {
        nextIndex = (focusedIndex - 1) % characters.length
      }
    }

    if (key === 'Enter' && characters) {
      const characterAtIndex = characters[focusedIndex]
      setSearch('')
      await router.push(`/characters#${characterAtIndex.id}`)
    }

    if (key === 'Escape' && characters) {
      setSearch('')
    }

    setFocusedIndex(nextIndex)
  }
  return (
    // had as absolute but checking relative if it works. I had md:static but I'm not sure why, it works with relative
    <div className='
      border-2 border-slate-800 relative rounded-xl flex items-center bg-white 
      sm:w-2/4 md:w-2/4 lg:w-2/6 xl:w-1/4' 
      onKeyDown={handleKeyDown} tabIndex={1}>
      <input className='w-full rounded-tl-xl pl-2 rounded-bl-xl self-center focus:outline-none' type='text' maxLength={20} onChange={handleSearch} value={search}/>
      <BsSearch className='bg-white rounded-r-xl' size='1.25em'/>
      <div className='bg-white rounded flex flex-col max-h-60 absolute top-full overflow-y-auto min-w-full'>
        {characters?.map((character, index)=> {
          return (<Link className={`${index === focusedIndex ? 'border-2 border-cyan-600' : 'border-0'} flex gap-4 items-center`} onClick={clearSearch} href={`/characters#${character.id}`} key={character.id} ref={index === focusedIndex ? resultContainer:null}>
            <Image className='max-h-12 max-w-12' width={50} height={50} src={character.pic} alt={`${character.name} thumbnail`}/>
            <h3>{character.name}</h3>
          </Link>)
        })}
      </div>
    </div>
  )
}

export default Search
import React from 'react'
import Image from 'next/image'
interface Character {
  id: string;
  name: string;
  pic: string;
  origin: string;
  votes: number;
}

interface Characters {
  characters: Character[] | undefined;
}

const Characters = ({characters}: Characters) => {
  return (
    <div className='flex flex-col gap-y-4 max-w-screen-xl mt-4'>
      {
        characters && characters.map((char: Character)=> {
          return (
            <div className="bg-gradient-to-tr from-indigo-900 via-blue-800 to-indigo-900 border-2 border-slate-200 flex items-end gap-x-2 p-2 rounded-lg" key={char.id}>
              <img className='w-24 h-24 object-contain' src={char.pic} alt='Final Fantasy Character'/>
              <div className="flex items-end gap-x-8">
                <div className='flex flex-col gap-y-4'>
                  <h1 className='text-slate-300 font-medium text-2xl'>{char.name}</h1>
                  <h1 className='text-slate-300 font-medium text-2xl'>{char.origin}</h1>
                </div>
                <h1 className='text-slate-300 font-medium text-2xl'>Votes: {char.votes}</h1>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Characters
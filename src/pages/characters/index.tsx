import { handleClientScriptLoad } from 'next/script';
import React from 'react'
import { api } from '../../utils/api'

interface Character {
    id: string;
    name: string;
    pic: string;
    origin: string;
}

const DefaultCharacters = () => {
    const characters = api.ff.getCharacters.useQuery()
    const upVote = api.ff.incrementVote.useMutation()
    
    const handleVote = (id: string)=> {
        upVote.mutate({id: id})
    }

    const { isLoading } = characters
    if (isLoading) return <h3>Loading...</h3>
  return (
    <div className='mt-14 max-w-7xl grid grid-cols-4 gap-4'>
        {
            characters && characters?.data?.map((char: Character)=> {
                return (
                    <div key={char.id}>
                        <img className="w-48 h-48 object-contain" src={char.pic}/>
                        <h3 className='text-slate-300'>{char.name}</h3>
                        <h3 className='text-slate-300'>{char.origin}</h3>
                        <button className='bg-sky-500/50 rounded-md text-slate-300 p-1 px-3' data-id={char.id} onClick={()=>handleVote(char.id)}> Vote </button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DefaultCharacters
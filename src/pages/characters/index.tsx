import { handleClientScriptLoad } from 'next/script';
import React from 'react'
import { api } from '../../utils/api'

interface Character {
    id: string;
    name: string;
    pic: string;
}
const DefaultCharacters = () => {
    const characters = api.ff.getCharacters.useQuery()
    const upVote = api.ff.incrementVote.useMutation()
    
    const handleVote = (id: string)=> {
        upVote.mutate({id: id})
    }
  return (
    <div>
        {
            characters && characters?.data?.map((char: Character)=> {
                return (
                    <div key={char.id}>
                        {
                            char.pic === 'unavailable' ? null : 
                            <img className="max-w-xs" src={char.pic}/>
                        }
                        <h3>{char.name}</h3>
                        <button className='bg-sky-500/50 rounded-md' data-id={char.id} onClick={()=>handleVote(char.id)}> Vote For!</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DefaultCharacters
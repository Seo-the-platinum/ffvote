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
    
  return (
    <div className='mt-14 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {isLoading &&  <h3 className='text-white text-2xl'>Loading...</h3>}
        {
            characters && characters?.data?.map((char: Character)=> {
                return (
                    <div className='flex flex-col gap-y-4' key={char.id}>
                        <img className="w-24 h-24 md:w-48 md:h-48 object-contain" src={char.pic}/>
                        <div className='flex gap-4'>
                            <div>
                                <h3 className='text-slate-300'>{char.name}</h3>
                                <h3 className='text-slate-300'>{char.origin}</h3>
                            </div>
                            <button className='
                                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-teal-500 hover:text-white duration-300
                                bg-blue-900 
                                rounded-md
                                text-slate-300 px-1 md:px-3' 
                                data-id={char.id} onClick={()=>handleVote(char.id)}> 
                                Vote
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DefaultCharacters
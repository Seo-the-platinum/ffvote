import React from 'react'
import { api } from '../../utils/api'

interface Char {
    
}
const DefaultCharacters = () => {
    const characters = api.ff.getCharacters.useQuery()
  return (
    <div>
        {
            characters.data?.map((char: any)=> {
                return (
                    <div key={char.id}>
                        <img className="max-w-xs" src={char.pictures[0]?.url}/>
                        <h3>{char.name}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DefaultCharacters
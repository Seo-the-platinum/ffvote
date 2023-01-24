import React from 'react'

import { api } from '../../utils/api'
import Characters from './Characters'



const Results = () => {
  const characters = api.ff.getCharactersByVote.useQuery()
  const { data } = characters
  return (
    <div className='bg-gradient-to-tr from-indigo-900 via-sky-600 to-indigo-900'>
      <Characters characters={data}/>
    </div>
  )
}

export default Results
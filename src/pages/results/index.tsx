import React from 'react'

import { api } from '../../utils/api'
import Characters from '../../components/results/Characters'

const Results = () => {
  const characters = api.ff.getCharactersByVote.useQuery()
  const { data, isLoading } = characters
  if (isLoading) return <h3>Loading...</h3>
  
  return (
    <div className='flex justify-center mt-12'>
      <Characters characters={data}/>
    </div>
  )
}

export default Results
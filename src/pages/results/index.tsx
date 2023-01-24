import React from 'react'

import { api } from '../../utils/api'
import Characters from '../../components/results/Characters'



const Results = () => {
  const characters = api.ff.getCharactersByVote.useQuery()
  const { data } = characters
  return (
    <div className='bg-gradient-to-br from-slate-100 via-slate-700 to-slate-900 flex justify-center'>
      <Characters characters={data}/>
    </div>
  )
}

export default Results
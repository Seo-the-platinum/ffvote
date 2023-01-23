import React from 'react'

import { api } from '../../utils/api'

const Results = () => {
  const characters = api.ff.getCharactersByVote.useQuery()
  return (
    <div>Results</div>
  )
}

export default Results
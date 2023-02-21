import React from 'react'
import { useRouter } from 'next/router'
import { api } from '../../utils/api'
import ResultList from '../../components/results/ResultList'

const Result = () => {
    const router = useRouter()
    const { query } = router
    const { data: results } = query.result === 'characters' ? api.ff.getCharactersByVote.useQuery() : api.ff.getGamesByVote.useQuery()

  return (
    <div className='mt-14'>
        <ResultList results={results}/>
    </div>
  )
}

export default Result
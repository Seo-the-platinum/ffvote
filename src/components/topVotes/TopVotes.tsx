import React from 'react'
import { api } from '../../utils/api'
import ResultList from '../results/ResultList'
const TopVotes = () => {
    const { data: topCharacters } = api.ff.getTopCharacters.useQuery()
    const { data: topGames } = api.ff.getTopGames.useQuery()
  return (
    <div className='flex flex-col md:flex-row justify-between gap-10 px-10'>
        <div className='flex flex-col'>
            <h3 className='text-lg text-white'>Top 10 Characters </h3>
            <ResultList results={topCharacters}/>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-white text-lg'>Top 5 Games</h3>
            <ResultList results={topGames}/>
        </div>
    </div>
  )
}

export default TopVotes
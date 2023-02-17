import React from 'react'
import { api } from '../../utils/api'

interface Game {
  id: string;
  title: string;
  pic: string;
}

const DefaultGames = () => {
  const { data: games, isLoading } = api.ff.getGames.useQuery()
  console.log(games)
  if (isLoading) return
  return (
    <div className='grid grid-cols-2 gap-x-8 mt-12 md:grid-cols-4'>
      {isLoading && <h3>Loading...</h3>}
      {games && games.map((game: Game)=> {
        return (
          <div key={game.id}>
            <img className='w-48 max-h-48 md:w-56 md:h-56 object-contain' src={`${game.pic}`} alt='game cover'/>
            <div className='flex gap-4 justify-center'>
              <h3 className='text-slate-300'>{game.title}</h3>
              <button className='
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-teal-500 hover:text-white duration-300
                bg-blue-900 
                rounded-md
                text-slate-300 px-1 md:px-3'>Vote</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DefaultGames
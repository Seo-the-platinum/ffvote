import React from 'react'
import { api } from '../../utils/api'

interface Game {
  id: string;
  title: string;
  pic: string;
}

const DefaultGames = () => {
  const games = api.ff.getGames.useQuery()
  return (
    <div>
      {games && games?.data?.map((game: Game)=> {
        return (
          <div key={game.id}>
            <h3>{game.title}</h3>
            <img src={game.pic}/>
          </div>
        )
      })}
    </div>
  )
}

export default DefaultGames
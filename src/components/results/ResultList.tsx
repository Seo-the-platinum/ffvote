import React from 'react'
import Image from 'next/image'

interface Character {
  id: string;
  name: string;
  pic: string;
  origin: string;
  votes: number;
}

interface Game {
    id: string;
    title: string;
    pic: string;
    votes: number;
  }
  
interface Results {
    results: Game[] | Character[] | undefined
  }

const ResultList = ({ results }: Results) => {
  return (
    <div className='flex flex-col gap-y-4 max-w-screen-xl mt-4'>
      {
        results && results.map((result: Game | Character)=> {
          return (
            <div className="bg-gradient-to-tr from-indigo-900 via-blue-800 to-indigo-900 border-2 border-slate-200 flex items-end gap-x-2 p-2 rounded-lg" key={result.id}>
              <Image className='w-24 h-24 object-contain' src={result.pic} alt='Final Fantasy Character' width={200} height={100}/>
              <div className="flex items-end gap-x-8">
                <div className='flex flex-col gap-y-4'>
                  <h1 className='text-slate-300 font-medium text-2xl'>{result.name ? result.name : result.title}</h1>
                  <h1 className='text-slate-300 font-medium text-2xl'>{result?.origin && result.origin}</h1>
                </div>
                <h1 className='text-slate-300 font-medium text-2xl'>Votes: {result.votes}</h1>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ResultList
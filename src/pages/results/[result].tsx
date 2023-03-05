import React from 'react'
import ResultList from '../../components/results/ResultList'
import type { GetServerSideProps } from 'next'
import { createProxySSGHelpers } from '@trpc/react-query/ssg'
import { appRouter } from '../../server/api/root'
import { createInnerTRPCContext } from '../../server/api/trpc'

type Character = {
  id: string;
  name: string;
  pic: string;
  origin: string;
  votes: number
}

type Game = {
  id: string;
  pic: string;
  title: string;
  votes: number;
}

interface Results {
  results: Character[] | Game[];
}

const Result = ({ results }: Results) => {
  return (
    <div className='mt-14 md:mt-20'>
        <ResultList results={results}/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx)=> {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({})
  })
  const results = ctx.query.result === 'characters' ? await ssg.ff.getCharactersByVote.fetch() : await ssg.ff.getGamesByVote.fetch()
  return {
    props: {
      results
    }
  }
}
export default Result
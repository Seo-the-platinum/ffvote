import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const ffRouter = createTRPCRouter({
    getCharacters: publicProcedure.query(async () => {
        const res = await fetch("https://www.moogleapi.com/api/v1/characters")
        const data = await res.json()
        return data
    }),
    getGames: publicProcedure.query(async ()=> {
        const res = await fetch("https://www.moogleapi.com/api/v1/games")
        const data = await res.json()
        return data
    }),
    getMonsters: publicProcedure.query(async ()=> {
        const res = await fetch("https://www.moogleapi.com/api/v1/monsters")
        const data = await res.json()
        return data
    })
})
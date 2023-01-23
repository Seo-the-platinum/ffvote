import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from '../../db'

export const ffRouter = createTRPCRouter({
    getCharacters: publicProcedure.query(async () => {
        const data = await prisma.character.findMany()
        return data
    }),
    getGames: publicProcedure.query(async ()=> {
        const data = await prisma.game.findMany()
        return data
    }),
    getMonsters: publicProcedure.query(async ()=> {
        const data = await prisma.monster.findMany()
        return data
    })
})
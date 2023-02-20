import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from '../../db'

export const ffRouter = createTRPCRouter({
    getCharacters: publicProcedure.query(async () => {
        const data = await prisma.character.findMany()
        return data
    }),
    getCharactersByVote: publicProcedure.query(async ()=> {
        const data = await prisma.character.findMany({
            orderBy: {
                votes: "desc",
            },
        })
        return data
    }),
    incrementVote: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({input})=> {
        await prisma.character.update({
            where: {
                id: input.id,
            },
            data: {
                votes: {increment: 1}
            }
        })
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
import { prisma }  from '../src/server/db'
 
interface Character {
    id: string;
    name: string;
    origin: string;
    pictures: [{ url: string}];
}

interface Game {
    id: string;
    picture: string;
    title: string;
}

interface Monster {
    id: string;
    name: string;
    picture: string;
}

const fillCharacters = async ()=> {
    const res = await fetch("https://www.moogleapi.com/api/v1/characters")
    const chars = await res.json()
    
    const formattedChars = chars.map((char: Character)=> ({
        id: char.id,
        name: char.name,
        pic: char.pictures[0] ? char.pictures[0].url : 'unavailable',
        origin: char.origin,
        votes: 0,
    }))
    const creation = await prisma.character.createMany({
        data: formattedChars
    })
}

const fillGames = async ()=> {
    const res = await fetch("https://www.moogleapi.com/api/v1/games")
    const games = await res.json()
    const formattedGames = games.map((game: Game)=> ({
        id: game.id,
        pic: game.picture,
        title: game.title,
        votes: 0,
    }))
    const creation = await prisma.game.createMany({
        data: formattedGames
    })
}

const fillMonsters = async ()=> {
    const res = await fetch("https://www.moogleapi.com/api/v1/Monsters")
    const mons = await res.json()
    const formattedMons = mons.map((mon: Monster) => ({
        id: mon.id,
        name: mon.name,
        pic: mon.picture,
        votes: 0,
    }))
    const creation = await prisma.monster.createMany({
        data: formattedMons
    })
}
const backFill = async ()=> {
    await Promise.all([ fillCharacters(), fillGames(), fillMonsters()])
}

const addOrigin = async ()=> {
    const res = await fetch("https://www.moogleapi.com/api/v1/characters")
    const chars = await res.json()

    const charsOrigins = await Promise.all(chars.map( async (char: Character)=> {
        if (char.pictures[0] !== undefined) {
            const update = await prisma.character.update({
                where: {id: char.id},
                data: {
                    origin: char.origin
                }
            })
        }
    }))   
}

const deleteRecords = async ()=> {
    const toDelete = await prisma.character.deleteMany({
        where: {origin: 'Final Fantasy BE'}
    })
}
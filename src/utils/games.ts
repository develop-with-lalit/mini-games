import { GamesCollection } from "./models";

const random = Math.round(Math.random() * 2)

export const gamesCollectionData: GamesCollection[] = [
    {
        gameId: "1",
        displayImage: "assets/CM/cards.png",
        altImage: "card matching game icon",
        name: "Card Matching",
        slug: "card-matching",
    },
    {
        gameId: "2",
        displayImage: ["assets/SPS/stone.png", "assets/SPS/paper.png", "assets/SPS/scissors.png"][random],
        altImage: "stone paper scissors game icon",
        name: "Stone Paper Scissors",
        slug: "stone-paper-scissors",
    },
    {
        gameId: "3",
        displayImage: "assets/squirrel.png",
        altImage: "word guess game icon",
        name: "Word Guess",
        slug: "word-guess",
    },
];
import { useState } from "react";
import ControlBar from "../components/CardMatching/ControlBar";
import GameGrid from "../components/CardMatching/GameGrid";
import { GamePlay } from "../utils/models";

const initiateRandomStartGameplay = (): GamePlay[] => {
  const initialGamePlay: GamePlay[] = [
    {
      position: "0",
      animalId: "cat",
      open: "assets/CM/cat.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "1",
      animalId: "cat",
      open: "assets/CM/cat.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "2",
      animalId: "dog",
      open: "assets/CM/dog.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "3",
      animalId: "dog",
      open: "assets/CM/dog.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "4",
      animalId: "hen",
      open: "assets/CM/hen.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "5",
      animalId: "hen",
      open: "assets/CM/hen.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "6",
      animalId: "duck",
      open: "assets/CM/duck.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "7",
      animalId: "duck",
      open: "assets/CM/duck.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "8",
      animalId: "hare",
      open: "assets/CM/hare.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "9",
      animalId: "hare",
      open: "assets/CM/hare.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "10",
      animalId: "cow",
      open: "assets/CM/cow.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "11",
      animalId: "cow",
      open: "assets/CM/cow.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "12",
      animalId: "owl",
      open: "assets/CM/owl.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "13",
      animalId: "owl",
      open: "assets/CM/owl.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "14",
      animalId: "rat",
      open: "assets/CM/rat.png",
      close: "assets/CM/cards.png",
      status: false,
    },
    {
      position: "15",
      animalId: "rat",
      open: "assets/CM/rat.png",
      close: "assets/CM/cards.png",
      status: false,
    },
  ];

  let unshuffled = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];

  let shuffled = unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  for (let i = 0; i < shuffled.length; i++) {
    initialGamePlay[i].position = shuffled[i];
  }

  const finalGamePlay = initialGamePlay.sort(
    (a, b) => parseInt(a.position) - parseInt(b.position)
  );
  return finalGamePlay;
};

const CardMatching = () => {
  const [openCards, setOpenCards] = useState<{ [id: string]: boolean }>({});
  const [isWin, setIsWin] = useState<boolean>(false);

  const [gamePlay, setGamePlay] = useState<GamePlay[]>(
    initiateRandomStartGameplay()
  );

  const resetGame = () => {
    setGamePlay(initiateRandomStartGameplay());
    setIsWin(false);
    setOpenCards({});
  };

  const handleOnCardPress = (id: string) => {
    setGamePlay((gamePlay) => {
      let openId = "";
      let localOpenCards = { ...openCards };
      for (let i = 0; i < gamePlay.length; i++) {
        if (
          id === gamePlay[i].position &&
          !localOpenCards[gamePlay[i].animalId]
        ) {
          gamePlay[i].status = !gamePlay[i].status;
          openId = gamePlay[i].animalId;
        }
      }

      for (let i = 0; i < gamePlay.length; i++) {
        if (
          id !== gamePlay[i].position &&
          gamePlay[i].status &&
          openId === gamePlay[i].animalId
        ) {
          localOpenCards = {
            ...localOpenCards,
            [openId]: true,
          };
        }
      }

      for (let i = 0; i < gamePlay.length; i++) {
        if (
          id !== gamePlay[i].position &&
          gamePlay[i].status &&
          !localOpenCards[gamePlay[i].animalId]
        ) {
          gamePlay[i].status = !gamePlay[i].status;
        }
        gamePlay[i] = { ...gamePlay[i] };
      }

      let winFlag = true;
      for (let i = 0; i < gamePlay.length; i++) {
        if (!gamePlay[i].status) {
          winFlag = false;
        }
      }
      setIsWin(winFlag);
      setOpenCards(localOpenCards);
      return [...gamePlay];
    });
  };

  return (
    <>
      <div className="mx-auto">
        <ControlBar resetGame={resetGame} isWin={isWin} />
        <GameGrid gamePlay={gamePlay} onPress={handleOnCardPress} />
      </div>
    </>
  );
};

export default CardMatching;

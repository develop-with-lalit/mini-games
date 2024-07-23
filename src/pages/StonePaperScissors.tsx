import { useState } from "react";
import ControlBar from "../components/SPS/ControlBar";
import ItemSelection from "../components/SPS/ItemSelection";

const getRandomValue = () => {
  return ["stone", "paper", "scissors"][Math.floor(Math.random() * 100) % 3];
};

const StonePaperScissors = () => {
  const [computerWins, setComputerWins] = useState(0);
  const [userWins, setUserWins] = useState(0);

  const [computerChoice, setComputerChoice] = useState("SPS/bot.png");
  const [userSelection, setUserSelection] = useState("SPS/user.png");
  const [message, setMessage] = useState("Make your choice");
  const [disabled, setDisabled] = useState(false);

  const runGameLogic = (item: string, botSelection: string) => {
    if (botSelection === item) {
      setMessage("Draw");
    } else if (botSelection === "stone") {
      if (item === "paper") {
        // user selects paper
        setMessage(`You Won "paper" wins over "stone"`);
        setUserWins((n) => n + 1);
      } else {
        // user selects scissors
        setMessage(`Computer Won \n "stone" wins over "scissors"`);
        setComputerWins((n) => n + 1);
      }
    } else if (botSelection === "paper") {
      if (item === "scissors") {
        // user selects scissors
        setMessage(`You Won "scissors" wins over "paper"`);
        setUserWins((n) => n + 1);
      } else {
        // user selects stone
        setMessage(`Computer Won \n "paper" wins over "stone"`);
        setComputerWins((n) => n + 1);
      }
    } else if (botSelection === "scissors") {
      if (item === "stone") {
        // user selects stone
        setMessage(`You Won "stone" wins over "scissors"`);
        setUserWins((n) => n + 1);
      } else {
        // user selects paper
        setMessage(`Computer Won \n "scissors" wins over "paper"`);
        setComputerWins((n) => n + 1);
      }
    }
  };

  const handleClick = (item: string) => {
    setDisabled(true);
    setComputerChoice("loading.gif");
    setUserSelection("loading.gif");

    setTimeout(() => {
      const botSelection = getRandomValue();

      setComputerChoice(`SPS/${botSelection}.png`);
      setUserSelection(`SPS/${item}.png`);

      runGameLogic(item, botSelection);

      setTimeout(() => {
        setComputerChoice("SPS/bot.png");
        setUserSelection("SPS/user.png");
        setMessage("Make your choice");
        setDisabled(false);
      }, 2800);
    }, 1000);
  };

  return (
    <div className="mx-auto w-96 sm:w-80 shadow-sm p-2 text-center">
      <div className="flex w-full justify-between mb-4">
        <ItemSelection
          who={`Computer (${computerWins})`}
          what={computerChoice}
        />
        <ItemSelection who={`You (${userWins})`} what={userSelection} />
      </div>
      <div>{message}</div>
      <ControlBar handleClick={handleClick} disabled={disabled} />
    </div>
  );
};

export default StonePaperScissors;

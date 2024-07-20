import { Button, Card, TextInput } from "flowbite-react";

import { wordData } from "../utils/words";

import WordAndDescriptionView from "../components/WordGuess/WordAndDescription";
import { useEffect, useState } from "react";

const getRandomNumber = (limit: number) => {
  return Math.floor(Math.random() * limit);
};

const WordGuess = () => {
  const [wordNumber, setWordNumber] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setWordNumber(getRandomNumber(wordData.length));
  }, []);

  const handleReset = () => {
    setWordNumber(getRandomNumber(wordData.length));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div className="mx-auto">
      <Card className="w-[350px] sm:w-96">
        <div className=" border-b-2 text-center">
          <h2 className="text-2xl font-bold">Guess The Word</h2>
        </div>
        <WordAndDescriptionView wordInfo={wordData[wordNumber]} />

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <TextInput
              id="answer"
              type="text"
              placeholder="Enter your guess"
              value={userInput}
              onChange={(e: any) => {
                setUserInput(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex  justify-between">
            <Button
              color="gray"
              className="w-2/5 "
              type="button"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button className=" w-2/5" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default WordGuess;

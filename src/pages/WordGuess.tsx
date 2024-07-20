import { Button, Card, TextInput } from "flowbite-react";

import { wordData } from "../utils/words";

import WordAndDescriptionView from "../components/WordGuess/WordAndDescription";
import { useEffect, useMemo, useRef, useState } from "react";

const getRandomNumber = (limit: number, exceptions?: number[]) => {
  return Math.floor(Math.random() * limit);
};

const WordGuess = () => {
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [wordNumber, setWordNumber] = useState(
    getRandomNumber(wordData.length)
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const timers = setInterval(() => {
      setTimeRemaining((t) => {
        if (t <= 0) {
          alert(`Correct word was ${wordData[wordNumber].word}`);
          handleReset();
        }
        return t - 1;
      });
    }, 1001);

    return () => {
      if (timers) {
        clearInterval(timers);
      }
    };
  }, []);

  const handleReset = () => {
    setWordNumber(getRandomNumber(wordData.length));
    inputRef.current && (inputRef.current.value = "");
    setTimeRemaining(30);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      String(e.target[0].value).trim().toLowerCase() ===
      wordData[wordNumber].word
    ) {
      alert("Correct Guess, Keep Going");
      // ensuring that words are not repeaded
      handleReset();
    } else {
      alert("Wrong Input, Keep Trying till timer lasts");
    }
  };

  const wordDisplay = useMemo(
    () => WordAndDescriptionView({ wordInfo: wordData[wordNumber] }),
    [wordNumber]
  );

  return (
    <div className="mx-auto">
      <Card className="w-[350px] sm:w-96">
        <div className=" border-b-2 text-center">
          <h2 className="text-2xl font-bold">Guess The Word</h2>
        </div>
        {wordDisplay}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <TextInput
              id="answer"
              type="text"
              placeholder="Enter your guess"
              ref={inputRef}
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
            <div className="w-1/5 text-center">{timeRemaining}s</div>
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

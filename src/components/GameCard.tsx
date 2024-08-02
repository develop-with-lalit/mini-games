import React from "react";
import { GamesCollection } from "../utils/models";
import { Link } from "react-router-dom";

const GameCard = ({ gameInfo }: { gameInfo: GamesCollection }) => {
  return (
    <Link to={gameInfo.slug}>
      <div className="flex-item w-60 shadow-md p-4 m-4 content-center">
        <img
          src={gameInfo.displayImage}
          alt={gameInfo.altImage}
          className="w-1/2 h-1/2 mx-auto"
        />

        <h2 className="font-bold text-center mt-4">{gameInfo.name}</h2>
      </div>
    </Link>
  );
};

export default GameCard;

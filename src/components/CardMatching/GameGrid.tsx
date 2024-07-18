import { GamePlay } from "../../utils/models";
import ImageCard from "./ImageCard";

const GameGrid = ({
  gamePlay,
  onPress,
}: {
  gamePlay: GamePlay[];
  onPress: (id: string) => void;
}) => {
  return (
    <>
      <div className="flex flex-wrap w-[100vw] p-2 sm:w-[500px] sm:p-0">
        {gamePlay.map((item: GamePlay, index: number) => {
          return (
            <div className="flex-item w-1/4" key={item.position}>
              <ImageCard
                id={item.position}
                source={item.status ? item.open : item.close}
                onPress={onPress}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameGrid;

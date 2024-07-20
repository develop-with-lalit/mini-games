import { WordAndDescription } from "../../utils/models";

const WordAndDescriptionView = ({
  wordInfo,
}: {
  wordInfo: WordAndDescription;
}) => {
  let shuffled = wordInfo.word
    .split("")
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .join("");

  return (
    <div className="text-center h-28">
      <p className="uppercase mb-2 text-xl font-semibold ">{shuffled}</p>
      <p className="text-lg capitalize mb-4">Hint: {wordInfo.description}</p>
    </div>
  );
};

export default WordAndDescriptionView;

const ControlBar = ({
  isWin,
  resetGame,
}: {
  isWin: boolean;
  resetGame: () => void;
}) => {
  return (
    <>
      <div className="w-full flex justify-between mb-4">
        <p className="text-center mt-2 mb-4">
          {isWin ? (
            <span className="text-green-500">
              "You Won, Press Reset to start Again"
            </span>
          ) : (
            <span className="text-grey-500">
              "Keep Going, Click on the card to reveal it"
            </span>
          )}
        </p>

        <button onClick={resetGame} className="mx-auto ">
          <img src="assets/reset.png" alt="reset button" />
        </button>
      </div>
    </>
  );
};

export default ControlBar;

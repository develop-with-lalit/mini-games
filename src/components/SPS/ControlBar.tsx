const ControlBar = ({
  handleClick,
  disabled,
}: {
  handleClick: (item: string) => void;
  disabled: boolean;
}) => {
  return (
    <div className="flex justify-between">
      <button
        onClick={() => {
          handleClick("stone");
        }}
        className="w-1/4 p-2  shadow-lg"
        disabled={disabled}
      >
        <img
          src="assets/SPS/stone.png"
          alt="stone"
          width={100}
          className="mx-auto"
        />
      </button>
      <button
        onClick={() => {
          handleClick("paper");
        }}
        className="w-1/4 p-2  shadow-lg"
        disabled={disabled}
      >
        <img
          src="assets/SPS/paper.png"
          alt="paper"
          width={100}
          className="mx-auto"
        />
      </button>
      <button
        onClick={() => {
          handleClick("scissors");
        }}
        className="w-1/4 p-2  shadow-lg"
        disabled={disabled}
      >
        <img
          src="assets/SPS/scissors.png"
          alt="scissors"
          width={100}
          className="mx-auto"
        />
      </button>
    </div>
  );
};

export default ControlBar;

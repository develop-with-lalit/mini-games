const ImageCard = ({
  id,
  source,
  onPress,
}: {
  id: string;
  source: string;
  onPress: (id: string) => void;
}) => {
  return (
    <>
      <button
        onClick={() => {
          onPress(id);
        }}
      >
        <img src={source} alt={source} height={100} width={100} />
      </button>
    </>
  );
};

export default ImageCard;

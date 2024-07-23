const ItemSelection = ({ who, what }: { who: string; what: string }) => {
  return (
    <div className="w-1/3 text-center">
      {who}
      <img
        src={`assets/${what}`}
        alt={what}
        width={60}
        className="mx-auto mt-4 mb-2"
      />
    </div>
  );
};

export default ItemSelection;

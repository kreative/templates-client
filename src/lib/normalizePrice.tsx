const normalizePrice = (price: string): JSX.Element => {
  if (price === "0") {
    return <span className="text-md">Free</span>;
  } else {
    return (
      <span>
        <span className="text-sm -mr-1">$</span>{" "}
        <span className="text-md">{price}</span>
      </span>
    );
  }
};

export default normalizePrice;

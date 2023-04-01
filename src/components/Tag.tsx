import normalizeText from "../lib/normalizeText";

interface ITagProps {
  text: string;
  color: string;
}

const Tag: React.FC<ITagProps> = (props: ITagProps): JSX.Element => {
  return (
    <span
      className={
        "inline-flex items-center py-1 px-3 rounded-md mr-2 " +
        (props.color === "purple"
          ? `bg-purple-100 text-purple-800 border-purple-800`
          : `bg-pink-100 text-pink-800 border-pink-800`)
      }
    >
      <svg
        className={
          "mr-1.5 h-2 w-2 " +
          (props.color === "purple" ? "text-purple-800" : "text-pink-800")
        }
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
      {normalizeText(props.text)}
    </span>
  );
};

export default Tag;

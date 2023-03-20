import Image from "next/image";
import { ITemplateCardProps } from "@/types/ITemplateCardProps";

const TemplateCard: React.FC<ITemplateCardProps> = (props: ITemplateCardProps): JSX.Element => {
  return (
    <div>
      <Image
        className="w-full h-auto"
        src={props.thumbnailUrl}
        alt="Template thumnbnail image"
        width={500}
        height={500}
      />
      <div className="flex items-start">
        <div>
          <Image
            className="h-4 w-4 rounded-full"
            src={props.authorAvatar}
            alt={props.authorName}
            width={24}
            height={24}
          />
        </div>
        <div className="ml-2">
          <h2>{props.name}</h2>
          <p>
            by {props.authorName} for {props.price}
          </p>
          <p>{props.tagline}</p>
          <p>{props.categoryName}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;

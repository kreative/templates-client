import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ITemplateCardProps } from "@/types/ITemplateCardProps";
import normalizeCategory from "../lib/normalizeCategory";
import normalizePrice from "../lib/normalizePrice";

const TemplateCard: React.FC<ITemplateCardProps> = (
  props: ITemplateCardProps
): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="hvr-grow pb-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={`/templates/${props.slug}`}>
        <Image
          className="w-full h-auto rounded-lg"
          src={props.thumbnailUrl}
          alt="Template thumnbnail image"
          width={600}
          height={600}
          placeholder="blur"
          blurDataURL={props.thumbnailUrl}
        />
      </Link>
      <div className="flex items-start pt-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={props.authorAvatar}
          alt={props.authorName}
          width={48}
          height={48}
          placeholder="blur"
          blurDataURL={props.authorAvatar}
        />
        <div className="ml-4">
          <Link href={`/templates/${props.slug}`}>
            <h3>
              <span className="text-xl font-bold hover:text-purple-700">{props.name}</span>{" "}
              <span className={isHovering ? "inline-block" : "hidden"}>
                <span className="text-gray-500">for</span>{" "}
                {normalizePrice(props.price)}
              </span>
            </h3>
          </Link>
          <p>
            by {props.authorName} <span className="text-gray-500">in</span>{" "}
            <Link
              href={`/categories/${props.categoryName}`}
              className="underline hover:text-purple-500"
            >
              {normalizeCategory(props.categoryName)}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;

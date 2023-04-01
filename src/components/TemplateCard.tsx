import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import normalizeText from "../lib/normalizeText";
import normalizePrice from "../lib/normalizePrice";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

interface ITemplateCardProps {
  name: string;
  authorName: string;
  authorAvatar: string;
  price: string;
  tagline: string;
  thumbnailUrl: string;
  slug: string;
  categoryName: string;
}

const TemplateCard: React.FC<ITemplateCardProps> = (
  props: ITemplateCardProps
): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dlazo25rt",
    },
  });

  const thumbnail = cld.image("ktemplates-thumbnails/Cool_Template_4_sf6bd2");

  thumbnail.resize(fill().width(600).height(400).gravity(autoGravity()));

  return (
    <div
      className="hvr-grow pb-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={`/templates/${props.slug}`}>
        <AdvancedImage
          cldImg={thumbnail}
          className="w-full h-auto rounded-lg border border-gray-300"
          alt="Template thumnbnail image"
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
            <h2>
              <span className="text-xl font-bold hover:text-purple-700">
                {props.name}
              </span>{" "}
              <span className={isHovering ? "inline-block" : "hidden"}>
                <span className="text-gray-500">for</span>{" "}
                {normalizePrice(props.price)}
              </span>
            </h2>
          </Link>
          <p>
            by {props.authorName} <span className="text-gray-500">in</span>{" "}
            <Link
              href={`/categories/${props.categoryName}`}
              className="underline hover:text-purple-500"
            >
              {normalizeText(props.categoryName)}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;

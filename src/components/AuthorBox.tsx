import Image from "next/image";

interface IAuthorBoxProps {
  displayName: string;
  avatarUrl: string;
  bio: string;
}

const AuthorBox: React.FC<IAuthorBoxProps> = (
  props: IAuthorBoxProps
): JSX.Element => {
  return (
    <div>
      <div className="flex items-start w-11/12">
        <Image
          src={props.avatarUrl}
          alt={`${props.displayName} avatar image`}
          className="w-14 h-14 rounded-full"
          width={48}
          height={48}
        />
        <div className="ml-4">
          <p className="text-xl text-gray-900 pb-1">{props.displayName}</p>
          <p className="text-md text-gray-600">{props.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorBox;

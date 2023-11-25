import Image from "next/image";
import {
  BsGlobeCentralSouthAsia,
  BsGithub,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";

interface LinkProps {
  website?: string;
  github?: string;
  facebook?: string;
  x?: string;
}

interface ItemProps {
  name: string;
  avatar: string;
  about: string;
  links: LinkProps;
}

const Item = ({ name, avatar, about, links }: ItemProps) => {
  return (
    <div className="bg-white dark:bg-gray-800  dark:text-gray-100 shadow-lg flex flex-col p-5 gap-3 items-center justify-center">
      <Image
        src={avatar}
        alt={name}
        width={100}
        height={100}
        style={{ borderRadius: 100 }}
      />
      <p>
        <span className="text-blue-700">{name}</span> {about}
      </p>

      <div className="flex text-gray-600 dark:text-gray-400 justify-center w-full gap-3 py-4">
        {links && (
          <>
            {links.website && (
              <a href={links.website}>
                <BsGlobeCentralSouthAsia size={25} />
              </a>
            )}

            {links.github && (
              <a href={links.github}>
                <BsGithub size={25} />
              </a>
            )}
            {links.x && (
              <a href={links.x}>
                <BsTwitter size={25} />
              </a>
            )}
            {links.facebook && (
              <a href={links.facebook}>
                <BsFacebook size={25} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Item;

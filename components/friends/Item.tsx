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
    <div className="text-black dark:text-white flex flex-col gap-8 justify-center items-center shadow-lg dark:shadow-slate-900 bg-white dark:bg-gray-800 p-5 mb-8 overflow-hidden">
      <img
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
              <a aria-label={`${name} website`} href={links.website}>
                <BsGlobeCentralSouthAsia size={25} />
              </a>
            )}

            {links.github && (
              <a aria-label={`${name} github account`} href={links.github}>
                <BsGithub size={25} />
              </a>
            )}
            {links.x && (
              <a aria-label={`${name} x account`} href={links.x}>
                <BsTwitter size={25} />
              </a>
            )}
            {links.facebook && (
              <a aria-label={`${name} facebook account`} href={links.facebook}>
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

import Image from "next/image";
import {
  BsGlobeCentralSouthAsia,
  BsGithub,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";

import Item from "./Item";

const Friends = () => {
  return (
    <div className="px-5 md:px-20">
      <h2 className="text-3xl text-center">Friends</h2>
      <div className="grid md:grid-cols-3 dark:gap-4 py-8">
       
        <Item
          name="Benaiah Alumona"
          avatar="https://avatars.githubusercontent.com/u/65370456?v=4"
          about="is a Self-taught Software Enigineer with a passion for thoughtful UI design, collaboration, and building."
          links={{
            website: "https://www.benrobo.co/",
            x: "https://x.com/benaiah_al",
            github: "https://github.com/benrobo",
          }}
        />
        
        <Item
          name="Melvin Jones"
          avatar=""
          about=""
          links={{
            website: "",
            x: "",
            github: "",
            facebook: ""
          }}
        />
        
        <Item
          name=""
          avatar="https://avatars.githubusercontent.com/u/62317165?v=4"
          about="is a self-taught
            Freelance Software Engineer with experience in web development, seo,
            computer hardware & software and currently pursuing arduino
            programming. Committed to make the world a better place to live."
          links={{
            website: "",
            x: "",
            github: "",
          }}
        />
        
        <div className="shadow-lg flex flex-col p-5 items-center justify-center">
          <Image
            src=""
            alt="Picture of Melvin Jones"
            width={100}
            height={100}
            style={{ borderRadius: 100 }}
          />
          <p>
            <span className="text-blue-700">Melvin Jones</span> is a self-taught
            Freelance Software Engineer with experience in web development, seo,
            computer hardware & software and currently pursuing arduino
            programming. Committed to make the world a better place to live.
          </p>

          <div className="flex text-gray-600 justify-center w-full gap-3 py-4">
            <a href="https://github.com/mrepol742">
              <BsGlobeCentralSouthAsia size={25} />
            </a>

            <a href="https://mrepol742.github.io">
              <BsGithub size={25} />
            </a>

            <a href="https://x.com/mrepol742">
              <BsTwitter size={25} />
            </a>
          </div>
        </div>

        <div className="shadow-lg flex flex-col p-5 items-center justify-center">
          <Image
            src="https://avatars.githubusercontent.com/u/9353811?v=4"
            alt="Picture of Papac (Frank DAKIA)"
            width={100}
            height={100}
            style={{ borderRadius: 100 }}
          />
          <p>
            <span className="text-blue-700">Frank DAKIA (Papac)</span> is a code
            Learning Club Animator and Creator of Bow Framework, DevOps Lover ❤️
          </p>

          <div className="flex text-gray-600 justify-center w-full gap-3 py-4">
            <a href="https://papac.dev">
              <BsGlobeCentralSouthAsia size={25} />
            </a>

            <a href="https://github.com/papac">
              <BsGithub size={25} />
            </a>

            <a href="https://x.com/papacdev">
              <BsTwitter size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

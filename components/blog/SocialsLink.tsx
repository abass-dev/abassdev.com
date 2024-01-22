import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialsLinks = () => {
  return (
    <>
      <a
        aria-label="Devs blog Facebook account"
        href="https://m.facebook.com/abassthedev"
      >
        <FaFacebook
          className={"text-blue-600 hover:text-orange-700"}
          size={26}
        />
      </a>
      <a
        aria-label="Devs blog Twitter account"
        href="https://twitter.com/abass_dev"
      >
        {" "}
        <FaTwitter
          className={"text-blue-400 hover:text-orange-700"}
          size={26}
        />
      </a>
      <a
        aria-label="Devs Instagram account"
        href="https://www.instagram.com/abassdev/"
      >
        <FaInstagram
          className={"text-orange-700 hover:text-orange-900"}
          size={26}
        />
      </a>
      <a
        aria-label="Devs Github account"
        href="https://github.com/abass-dev/abassdev.com"
      >
        <FaGithub className={"text-gray-700 hover:text-orange-700"} size={26} />
      </a>
    </>
  );
};

export default SocialsLinks;

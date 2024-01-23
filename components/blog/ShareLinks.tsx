import { FaFacebook, FaTwitter, FaWhatsappSquare } from "react-icons/fa";

const ShareLinks = ({ post }: any) => {
  return (
    <div className="flex gap-2 p-1">
      <a
        aria-label="Share on Whatsapp"
        href={`whatsapp://send?text=Check out this blog post: ${post.title} https://abassdev.com/blog/${post.category}/${post.slug}`}
        data-action="share/whatsapp/share"
      >
        <FaWhatsappSquare
          className="text-green-600 hover:text-green-800"
          size={20}
        />
      </a>
      <a
        aria-label="Share on Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          `https://abassdev.com/blog/${post.category}/${post.slug}`
        )}`}
      >
        <FaFacebook className="text-blue-600 hover:text-blue-800" size={20} />
      </a>
      <a
        aria-label="Share on Facebook"
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          `https://abassdev.com/blog/${post.category}/${post.slug}?text= Check out this blog post: ${post.title}`
        )}`}
      >
        <FaTwitter className="text-blue-400 hover:text-blue-600" size={20} />
      </a>
    </div>
  );
};

export default ShareLinks;

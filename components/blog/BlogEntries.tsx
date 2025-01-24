import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface BlogEntryProps {
  title: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
}

const BlogEntry: React.FC<BlogEntryProps> = ({
  title,
  date,
  category,
  description,
  imageUrl,
  link,
}) => (
  <div className="w-full md:w-1/3 px-4 mb-8 animate-fade-in">
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={link}>
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {date} | {category}
        </span>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mt-2 hover:text-blue-600 transition-colors duration-200">
          <Link href={link}>{title}</Link>
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mt-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={link}
          className="text-sm font-medium text-blue-600 hover:underline transition-all duration-200"
        >
          Read more →
        </Link>
      </CardFooter>
    </Card>
  </div>
);

const BlogEntries: React.FC = () => {
  const entries = [
    {
      title: "Understanding the New File-Based Routing System in Next.js 13",
      date: "September 22, 2024",
      category: "Next.js",
      description:
        "With the release of Next.js 13, a significant shift has taken place in how routing is handled, leaving many developers confused.",
      imageUrl:
        "https://abassdev.com/blog/wp-content/uploads/2024/09/Next.js-13-App-Router-1024x794.png",
      link: "https://abassdev.com/blog/2024/09/22/understanding-the-new-file-based-routing-system-in-next-js-13/",
    },
    {
      title: "Guide to Structuring Express.js Applications",
      date: "September 21, 2024",
      category: "Nodejs",
      description:
        "Welcome to our comprehensive guide on building structured web applications using Express.js!",
      imageUrl: "https://abassdev.com/blog/wp-content/uploads/2024/09/image-1.png",
      link: "https://abassdev.com/blog/2024/09/21/guide-to-structuring-express-js-applications/",
    },
    {
      title: "Detect When a User Switches Browser Tabs Using JavaScript",
      date: "October 05, 2024",
      category: "Web App",
      description:
        "Have you ever wanted to know when a user switches away from your website’s tab?",
      imageUrl:
        "/assets/images/javascript-code.webp",
      link: "https://abassdev.com/blog/2024/09/18/detect-when-a-user-switches-browser-tabs-using-javascript/",
    },
  ];

  return (
    <div className="flex flex-wrap -mx-4">
      {entries.map((entry, index) => (
        <BlogEntry key={index} {...entry} />
      ))}
    </div>
  );
};

export default BlogEntries;

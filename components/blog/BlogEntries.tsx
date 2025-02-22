import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
          <Image
            width={800} // Set appropriate width
            height={450} // Set appropriate height
            src={imageUrl}
            placeholder="blur" // Blurred placeholder
            blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAD8D+JaQAA3AA/uVQAAA="
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
  const t = useTranslations("blogEntries");
  const entries = t.raw("entries");

  return (
    <div className="flex flex-wrap -mx-4">
      {entries.map((entry: BlogEntryProps, index: number) => (
        <BlogEntry key={index} {...entry} />
      ))}
    </div>
  );
};

export default BlogEntries;

import Image from 'next/image';
import Link from 'next/link';

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
    <div className="bg-white shadow-lg dark:bg-gray-800 rounded-lg overflow-hidden">
      <Link href={link}>
          <Image
            src={imageUrl}
            alt={title}
            width={1024}
            height={794}
            className="w-full h-auto object-cover"
          /> 
      </Link>
      <div className="p-4">
        <span className="text-gray-500 text-sm">
          {date} | {category}
        </span>
        <h3 className="text-xl font-semibold my-2">
          <Link href={link}>{title}</Link>
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const BlogEntries: React.FC = () => {
  const entries = [
    {
      title: 'Understanding the New File-Based Routing System in Next.js 13',
      date: 'September 22, 2024',
      category: 'Next.js',
      description:
        'With the release of Next.js 13, a significant shift has taken place in how routing is handled, leaving many developers confused.',
      imageUrl:
        'https://abassdev.com/blog/wp-content/uploads/2024/09/Next.js-13-App-Router-1024x794.png',
      link: 'https://abassdev.com/blog/2024/09/22/understanding-the-new-file-based-routing-system-in-next-js-13/',
    },
    {
      title: 'Guide to Structuring Express.js Applications',
      date: 'September 21, 2024',
      category: 'Nodejs',
      description:
        'Welcome to our comprehensive guide on building structured web applications using Express.js!',
      imageUrl: 'https://abassdev.com/blog/wp-content/uploads/2024/09/image-1.png',
      link: 'https://abassdev.com/blog/2024/09/21/guide-to-structuring-express-js-applications/',
    },
    {
      title: 'Create a Professional Portfolio',
      date: 'October 05, 2024',
      category: 'Web App',
      description:
        'Learn how to create a professional portfolio that stands out in the tech world.',
      imageUrl:
        'https://abassdev.com/blog/wp-content/uploads/2024/10/Screenshot_20241006_172131_Chrome-1024x436.png',
      link: 'https://abassdev.com/blog/2024/10/06/create-a-professional-portfolio/',
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

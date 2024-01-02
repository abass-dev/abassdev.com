import { dateToReadable } from "@/helpers";
import CodeBlock from "./CodeBlock";
import Link from "next/link";

type PostItem = {
  id?: number;
  title?: string;
  tech?: string;
  description?: string;
  codesniper: string;
  created_at?: string;
  updated_on?: string;
  snippet_type: string;
};

const PostItem = ({ data }: { data: PostItem[] }) => {
  return data.map((item) => {
    return (
      <div key={item.id} id={`${item.tech}-${item.id}`}>
        <Link aria-label={item.title} href={`#${item.tech}-${item.id}`}>
          <h2 className="text-2xl mb-5 mt-10 lg:text-4xl">{item.title}</h2>
        </Link>
        <div className="max-h-[960px] flex flex-col-reverse lg:flex-row overflow-auto dark:shadow-gray-950 bg-white shadow dark:bg-gray-800">
          <div className="flex-1">
            <div className="p-5">
              <p className="text-base text-gray-400 mb-3">
                Published on: <span>{dateToReadable(item.created_at)}</span>
              </p>
              <p>{item.description}</p>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-5">
            <CodeBlock snippetType={item.snippet_type} code={item.codesniper} />
          </div>
        </div>
      </div>
    );
  });
};

export default PostItem;

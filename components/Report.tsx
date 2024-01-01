import localFont from "next/font/local";
import { FaArrowAltCircleRight } from "react-icons/fa";
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});
interface ReportProps {
  report?: string;
  dir?: string;
  ext?: string;
}

const Link = ({ href, text }: { href: string; text: string }) => {
  return (
    <li className="mb-2 hover:text-gray-500">
      <a className="flex gap-2 items-center" href={href}>
        <FaArrowAltCircleRight /> {text}
      </a>
    </li>
  );
};

const Report = ({
  report = "page",
  dir = "app",
  ext = ".tsx",
}: ReportProps) => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32 p-5 text-black dark:text-white pt-10 flex items-start flex-col justify-start">
        <h2
          className={`${EduNSWACTFoundation.className} text-gray-700  dark:text-gray-300 text-3xl md:text-4xl`}
        >
          Anything wrong with this page?
        </h2>
        <ul className="p-5 mt-4 gap-2 grid text-gray-800 dark:text-gray-200 text-xl">
          <Link
            href={`https://github.com/abass-dev/abassdev.com/blob/next-abassdev.com/${dir}/${report}${ext}`}
            text="Code source of this page"
          />
          <Link
            href="https://github.com/abass-dev/abassdev.com/issues/new?"
            text="Report issue on github"
          />
          <Link
            href={`mailto:abass@abassdev.com?subject=Report issues https://github.com/abass-dev/abassdev.com/blob/next-abassdev.com/${dir}/${report}${ext}&body=Hi Abass Dev, I found some issues with this component... [${report}]`}
            text="Report issue by email"
          />

          <Link
            href={`https://github.com/abass-dev/abassdev.com/edit/next-abassdev.com/${dir}/${report}${ext}`}
            text="Edit this page on github"
          />

          <Link
            href="https://github.com/abass-dev/abassdev.com/fork"
            text="Fork this repository"
          />
        </ul>
      </div>
    </div>
  );
};
export default Report;

import localFont from "next/font/local";
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});
interface ReportProps {
  report?: string;
  dir?: string;
  ext?: string;
}

const Report = ({
  report = "page",
  dir = "app",
  ext = ".tsx",
}: ReportProps) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white  shadow-lg dark:bg-gray-800 w-5/6 p-10 mb-10 text-black dark:text-white pt-8 flex items-start flex-col justify-start">
        <h2
          className={`${EduNSWACTFoundation.className} text-gray-700  dark:text-gray-300 text-3xl md:text-4xl pb-10`}
        >
          Anything wrong with this page?
        </h2>
        <ul className="list-disc mt-4 gap-2 grid text-xl">
          <li>
            <a
              className="text-blue-700"
              href={`https://github.com/abass-dev/nextjs-abassdev.com/blob/master/${dir}/${report}${ext}`}
            >
              Code source of this page
            </a>
          </li>
          <li>
            <a
              className="text-blue-700"
              href="https://github.com/abass-dev/nextjs-abassdev.com/issues/new?"
            >
              Report issue on github
            </a>
          </li>
          <li>
            <a
              className="text-blue-700"
              href={`mailto:abass@abassdev.com?subject=Report issues https://github.com/abass-dev/nextjs-abassdev.com/blob/master/${dir}/${report}${ext}&body=Hi Abass Dev, I found some issues with this component... [${report}]`}
            >
              Report issue by email
            </a>
          </li>
          <li>
            <a
              className="text-blue-700"
              href={`https://github.com/abass-dev/nextjs-abassdev.com/edit/master/${dir}/${report}${ext}`}
            >
              Edit this page on github
            </a>
          </li>
          <li>
            <a
              className="text-blue-700"
              href="https://github.com/abass-dev/nextjs-abassdev.com/fork"
            >
              Fork this repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Report;

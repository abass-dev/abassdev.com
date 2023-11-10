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
    <div className="container mx-auto xpt">
      <div className="shadow-lg m-5 p-5">
        <h2 className="text-xl bold pb-5">Notice anything wrong with this page?</h2>
        <ul className="list-disc p-4">
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
          <li>
            <a
              className="text-blue-700"
              href={`https://github.com/abass-dev/nextjs-abassdev.com/blob/master/${dir}/${report}${ext}`}
            >
              Code source of this page
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Report;

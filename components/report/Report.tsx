const Report = ({ report = "app/Page.tsx" }) => {
  return (
    <div className="container mx-auto xpt">
      <div className="shadow-lg p-5">
    <h2 className='text-3xl pb-5'>Found a problem with this page?</h2>
        <ul className='list-disc'>
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
              href={`mailto:abass@abassdev.com?subject=Report issues https://github.com/abass-dev/nextjs-abassdev/blob/master/src/Component/${report}&body=Hi Abass Dev, I found some issues with this component... [${report}]`}
            >
              Report issue by email
            </a>
          </li>
          <li>
            <a
              className="text-blue-700"
              href={`https://github.com/abass-dev/nextjs-abassdev/edit/master/src/Component/${report}`}
            >
              Edit this page on github
            </a>
          </li>
          <li>
            <a
              className="text-blue-700"
              href="https://github.com/abass-dev/nextjs-abassdev/fork"
            >
              Fork this repository
            </a>
          </li>
          <li>
            <a
              className="text-blue-700"
              href={`https://github.com/abass-dev/nextjs-abassdev/blob/master/src/Component/${report}`}
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

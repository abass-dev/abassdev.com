import Link from "next/link";
import localFont from "next/font/local";
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});

interface HomeItemsProps {
  title: string;
  bgImg: string;
  desk: string;
  learnMore: {
    text: string;
    href: string;
  };
}

const HomeItems = ({ title, bgImg, desk, learnMore }: HomeItemsProps) => {
  return (
    <div className="col-span-2 md:col-span-1 flex justify-center">
      <div
        className={`hover:scale-110 ${bgImg} block max-w-lg rounded-lg bg-white bg-cover  shadow-lg dark:bg-neutral-700`}
      >
        <div className="backdrop-blur flex justify-center items-start flex-col rounded-lg m-6 p-6">
          <h2
            className={`${EduNSWACTFoundation.className} mb-6 text-4xl font-medium leading-tight text-gray-100`}
          >
            {title}
          </h2>
          <p className="mb-4 text-base text-neutral-200">{desk}</p>
          <button
            type="button"
            className="inline-block rounded border-2 border-neutral-50 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            <Link className="px-6" href={learnMore.href}>
              {learnMore.text}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItems;

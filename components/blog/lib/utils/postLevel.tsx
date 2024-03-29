import { GiLevelFour, GiLevelFourAdvanced } from "react-icons/gi";

const PostLevel = ({ level }: { level: string }) => {
  if (!level) {
    return null;
  }

  return (
    <div
      className={`flex justify-center rounded-sm items-center gap-1 px-1 ${
        level === "easy"
          ? "bg-green-200 text-green-950"
          : level === "medium"
          ? "bg-yellow-200 text-yellow-950"
          : "bg-red-200 text-red-950"
      }`}
    >
      <GiLevelFourAdvanced />
      <p>{level}</p>
    </div>
  );
};

export default PostLevel;

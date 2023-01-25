import Image from "next/image";
import globVec from "../../../public/images/glob_vector.jpg";
import downArrowVec from "../../../public/images/down_arrow_vector.jpg";

const containerCls = [
  "w-auto",
  "flex",
  "flex row",
  "flex-wrap",
  "space-x-[4px]",
  "items-center",
  "cursor-pointer",
].join(" ");
const grobVecCls = ["h-[22px]", "w-[22px]"].join(" ");
const langTitleCls = ["text-[#4010A1]", "text-sm"].join(" ");
const downArrowCls = ["w-[20px]", "h-[5px]", "object-contain"].join(" ");

const LanguageSwitcher = (_: LanguageSwitcherProps) => {
  return (
    <div className={containerCls}>
      <Image src={globVec} alt="" className={grobVecCls} />
      <p className={langTitleCls}>En</p>
      <Image src={downArrowVec} alt="" className={downArrowCls} />
    </div>
  );
};

export type LanguageSwitcherProps = {
  onClick?: () => void;
};
export default LanguageSwitcher;

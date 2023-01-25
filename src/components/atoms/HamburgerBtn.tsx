import Image from "next/image";
import burgerMenuVec from "../../../public/images/burgermenu_vector.jpg";

const hamburgerMenuCls = [
  "h-[18px]",
  "w-[36px]",
  "object contain",
  "cursor-pointer",
].join(" ");

const HamburgerBtn = () => {
  return (
    <Image className={hamburgerMenuCls} src={burgerMenuVec} alt={"menu"} />
  );
};

export type HamburgerBtnProps = {
  onClick?: () => void;
};
export default HamburgerBtn;

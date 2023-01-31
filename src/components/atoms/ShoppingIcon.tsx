import Image from "next/image";
import shoppingIcon from "../../../public/images/shopping_ic.jpg";

const cls = ["h-[22px]", "w-[16px]", "object-contain"].join(" ");
const ShoppingIcon = () => {
  return <Image src={shoppingIcon} alt="" className={cls} priority />;
};

export default ShoppingIcon;

import Image from "next/image";
import ShoppingIcon from "../atoms/ShoppingIcon";
import RIconButton from "../molecules/RIconButton";
import landingImg_1 from "../../../public/images/landing_img1.jpg";

const containerCls = [
  "w-full",
  "bg-red-500",
  "bg-gradient-to-r",
  "from-[#4010A1]",
  "via-[#C84E89]",
  "via-[#F15F79]",
  "to-[#F79100]",
  "flex",
  "flex-row",
].join(" ");
const contentContainerCls = [
  "flex-1",
  "flex-col",
  "space-y-[22px]",
  "pl-[147px]",
  "pt-[60px]",
  "pb-[52px]",
].join(" ");

const imgContainer = ["flex", "flex-col", "justify-end"].join(" ");
const imgCls = [
  "mt-[85px]",
  "mb-[14px]",
  "w-[735px]",
  "h-[387px]",
  "object-contain",
].join(" ");
const StoreLeadingContent = () => {
  return (
    <div className={containerCls}>
      <div className={contentContainerCls}>
        <h2 className="text-6xl text-white text-[#FFE3E3]">
          Beyond Ruby’s <br />
          Community <br />
          Marketplace
        </h2>

        {/* <GradientText text="Test some text" /> */}

        <p className="text-[#FFE3E3] text-base">
          Buy artwork from artists worldwide, or have a custom painting made
          just
          <br />
          for you, 100% of proceeds goes to supporting our cause.
        </p>

        <RIconButton icon={<ShoppingIcon />} title={"Go Shopping"} />
      </div>
      <div className={imgContainer}>
        <Image src={landingImg_1} alt="" className={imgCls} />
      </div>
    </div>
  );
};

export default StoreLeadingContent;

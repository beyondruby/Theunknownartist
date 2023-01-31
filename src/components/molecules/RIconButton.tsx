import type { ReactNode, FC } from "react";

const containerCls = [
  "h-[56px]",
  "w-[264px]",
  "border",
  "border-2",
  "border-white",
  "rounded-full",
  "flex",
  "flex-row",
  "space-x-[10px]",
  "justify-center",
  "items-center",
].join(" ");
const titleCls = ["text-base", "text-white"].join(" ");
const RIconButton: FC<RIconButtonProps> = (props) => {
  return (
    <button className={containerCls}>
      {props.icon ?? <></>}
      <p className={titleCls}>{props.title}</p>
    </button>
  );
};

export type RIconButtonProps = {
  icon?: ReactNode;
  title: string;
};
export default RIconButton;

import type { FC } from "react";

const DEFAULT_TEXTSIZE = "text-6xl";
const getCls: (props: GradientTextProps) => string = (props) => {
  return [
    props.fontStyle ?? DEFAULT_TEXTSIZE,
    "text-transparent",
    "bg-clip-text",
    "bg-gradient-to-r",
    "from-[#4010A1]",
    "via-[#C84E89]",
    "via-[#F15F79]",
    "to-[#F79100]",
  ].join(" ");
};

export type GradientTextProps = {
  fontStyle?: string;
  text?: string;
};

const GradientText: FC<GradientTextProps> = (props) => {
  return <h1 className={getCls(props)}>{props.text ?? ""}</h1>;
};

export default GradientText;

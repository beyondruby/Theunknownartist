import Image from "next/image";
import logoImg from "../../../public/images/beyondruby_logo.jpg";

const LogoImg = () => {
  return (
    <Image
      src={logoImg}
      alt="the unknow artist"
      priority
      className="h-[63px] w-[98px] object-contain"
    />
  );
};

export default LogoImg;

import LogoImg from "../atoms/LogoImg";
import LanguagesSwitcher from "../atoms/LanguagesSwitcher";
import LoginBtn from "../atoms/LoginBtn";
import HamburgerBtn from "../atoms/HamburgerBtn";

const containerCls = [
  "h-auto",
  "py-[15px]",
  "px-[147px]",
  "w-full",
  "bg-white",
  "drop-shadow-md",
  "flex",
  "flex-row",
].join(" ");

const Navbar = (_: NavbarProps) => {
  return (
    <div className={containerCls}>
      <LogoImg />

      <div className="flex flex-row flex-1 justify-end items-center space-x-[32px]">
        <LanguagesSwitcher />
        <LoginBtn />
        <HamburgerBtn />
      </div>
    </div>
  );
};

export type NavbarProps = {};
export default Navbar;

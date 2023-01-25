const cls = [
  "h-[36px]",
  "bg-white",
  "border",
  "border-2",
  "border-solid",
  "border-amber-500",
  "px-4",
  "py-1",
  "rounded-full",
  "text-amber-500",
  "transition",
  "hover:text-white",
  "hover:bg-amber-500",
  "hover:border-white",
  "hover:duration-300",
].join(" ");

const LoginBtn = ({ onClick }: LoginBtnProps) => {
  return (
    <button className={cls} onClick={onClick}>
      Log In
    </button>
  );
};

export type LoginBtnProps = {
  onClick?: () => void;
};
export default LoginBtn;

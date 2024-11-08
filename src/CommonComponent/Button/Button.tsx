import clsx from "clsx";
import { MouseEvent, PropsWithChildren, ReactElement } from "react";
interface ButtonProps {
  style?: object;
  size?: string;
  variant?: string;
  className?: string;
  LeadingIcon?: ReactElement;
  TrailingIcon?: ReactElement;
  IconOnly?: ReactElement;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "reset" | "button" | "submit";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CustomButtons = ({
  onClick,
  className,
  variant = "green",
  type = "button",
  disabled,
  isLoading = false,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const classNames = clsx("buttonclass", className, `bg-[#1f38f0] text-white px-3 py-2 rounded`);
  return (
    <button onClick={onClick} type={type} className={classNames} disabled={disabled} {...props}>
      {isLoading ? <>loading..</> : children}
    </button>
  );
};

export default CustomButtons;

import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color + " scale-button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

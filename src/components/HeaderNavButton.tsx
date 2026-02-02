import { Link } from "react-router-dom";

interface HeaderNavButtonProps {
  label: string;
  url: string;
  isSelected: boolean;
}

export default function HeaderNavButton({
  label,
  isSelected,
  url,
}: HeaderNavButtonProps) {
  let buttonClasses = "btn border-solid";
  if (isSelected) {
    buttonClasses += " btn-primary text-black";
  } else {
    buttonClasses += " border-2 border-black";
  }
  return (
    <Link to={url} className={buttonClasses}>
      {label}
    </Link>
  );
}

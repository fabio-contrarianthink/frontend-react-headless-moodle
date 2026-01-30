interface HeaderNavButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function HeaderNavButton({
  label,
  isSelected,
  onClick,
}: HeaderNavButtonProps) {
  let buttonClasses = "btn border-solid";
  if (isSelected) {
    buttonClasses += " btn-primary";
  } else {
    buttonClasses += " border-2 border-black";
  }
  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
}

import HeaderNavButton from "@/components/HeaderNavButton";
import { useState } from "react";

const headerButtons = [
  {
    label: "Library",
    url: "/library",
  },
  {
    label: "Templates",
    url: "/template",
  },
  {
    label: "Tool & Services",
    url: "/tools",
  },
];

export default function Header() {
  const [selectedButton, setSelectedButton] = useState<string>("");

  return (
    <div className="bg-base-200 p-2">
      <div className="bg-white px-6 py-2 flex gap-2 rounded-lg">
        {headerButtons.map((buttonData, index) => {
          return (
            <HeaderNavButton
              key={index}
              onClick={() => setSelectedButton(buttonData.label)}
              isSelected={buttonData.label == selectedButton}
              label={buttonData.label}
            />
          );
        })}
      </div>
    </div>
  );
}

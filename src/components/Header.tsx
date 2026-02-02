import HeaderNavButton from "@/components/HeaderNavButton";
import { useLocation } from "react-router-dom";
import LoginButton from "@/components/auth0/LoginButton";

const headerButtons = [
  {
    label: "Library",
    url: "/library",
  },
  {
    label: "Templates",
    url: "/templates",
  },
  {
    label: "Tool & Services",
    url: "/tools",
  },
];

export default function Header() {
  const location = useLocation();

  return (
    <div className="bg-base-200 p-2">
      <div className="bg-white px-6 py-2 flex gap-2 rounded-lg">
        {headerButtons.map((buttonData, index) => {
          return (
            <HeaderNavButton
              key={index}
              isSelected={
                location.pathname.toLowerCase() === buttonData.url.toLowerCase()
              }
              label={buttonData.label}
              url={buttonData.url}
            />
          );
        })}
        <div className="flex flex-1 justify-end">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

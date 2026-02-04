import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import HeaderNavButton from "@/components/HeaderNavButton";
import LoginButton from "@/components/auth0/LoginButton";
import Profile from "@/components/auth0/Profile";

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
  const { isAuthenticated, isLoading, error } = useAuth0();
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
          {!isLoading && !error ? (
            isAuthenticated ? (
              <Profile />
            ) : (
              <LoginButton />
            )
          ) : (
            <div className="p-2">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

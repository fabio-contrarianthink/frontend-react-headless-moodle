import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="btn border-2 border-black border-solid text-black button login"
    >
      Log In
    </button>
  );
};

export default LoginButton;

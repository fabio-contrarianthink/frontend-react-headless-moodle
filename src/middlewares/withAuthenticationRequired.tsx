import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * HOC to wrap components that require authentication.
 * Shows loading or error states, or prompts to authenticate if not logged in.
 */
export function withAuthenticationRequired<P extends object>(
  Component: React.ComponentType<P>,
) {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated, isLoading, error } = useAuth0();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return (
        <div>
          <div>Oops!</div>
          <div>Something went wrong</div>
        </div>
      );
    }

    if (!isAuthenticated) {
      return <div>Please Authenticate to see this page.</div>;
    }

    return <Component {...props} />;
  };
}

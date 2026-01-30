import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import CourseLibrary from "@/components/moodle/CourseLibrary";
import LoginButton from "@/components/auth0/LoginButton";
import Profile from "@/components/auth0/Profile";
import LogoutButton from "@/components/auth0/LogoutButton";

const queryClient = new QueryClient();

export default function AppContent() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  console.log(isAuthenticated, isLoading, error);

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  if (error) {
    return (
      <div className="">
        <div className="">
          <div className="">Oops!</div>
          <div className="">Something went wrong</div>
          <div className="">{error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated ? (
        <div className="logged-in-section">
          <div className="logged-in-message">
            ✅ Successfully authenticated!
          </div>
          <h2 className="profile-section-title">Your Profile</h2>
          <div>
            <QueryClientProvider client={queryClient}>
              <CourseLibrary />
            </QueryClientProvider>
          </div>
          <div className="profile-card">
            <Profile />
          </div>
          <LogoutButton />
        </div>
      ) : (
        <div className="action-card">
          <p className="action-text">
            Get started by signing in to your account
          </p>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import CourseLibrary from "@/components/moodle/CourseLibrary";
import { getUserIdFromEmail } from "@/services/moodle/moodleHeadlessClient";

const queryClient = new QueryClient();

export default function Library() {
  const { isAuthenticated, isLoading, error, user } = useAuth0();

  if (!isAuthenticated) {
    return <div className="">Please Authenticate to see library.</div>;
  }

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  if (error || !user || !user.email) {
    return (
      <div className="">
        <div className="">
          <div className="">Oops!</div>
          <div className="">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <CourseLibrary userEmail={user.email!} />
      </QueryClientProvider>
    </div>
  );
}

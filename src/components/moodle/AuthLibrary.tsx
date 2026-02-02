import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import CourseLibrary from "@/components/moodle/CourseLibrary";

const queryClient = new QueryClient();

export default function Library() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isAuthenticated) {
    return <div className="">Please Authenticate to see library.</div>;
  }

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
      <QueryClientProvider client={queryClient}>
        <CourseLibrary />
      </QueryClientProvider>
    </div>
  );
}

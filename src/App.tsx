import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CourseLibrary from "@/components/moodle/CourseLibrary";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CourseLibrary />
    </QueryClientProvider>
  );
}

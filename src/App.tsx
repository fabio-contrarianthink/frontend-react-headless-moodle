import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { coreCoursesGetCourses } from '@/services/moodle/moodleHeadlessClient';
import type { Course } from "@/types/moodle/course";

const queryClient = new QueryClient();

function Todos() {
    const { isPending, error, data } = useQuery({
        queryKey: ["todos"],
        queryFn: () => coreCoursesGetCourses(),
    });

    if (isPending)
    {
        return 'Loading...';
    }

    if (error)
    {
        return 'error';
    }

    return (
        <div>
        {data.map((dataEntry: Course) => (
            <div>
            <p>id: {dataEntry.shortname}</p>
            </div>
        ))}
        </div>
    );
}

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <Todos />
        </QueryClientProvider>
    )
}

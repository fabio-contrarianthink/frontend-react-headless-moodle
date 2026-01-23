import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import './App.css'
import { coreCoursesGetCourses } from '@services/moodle/moodleHeadlessClient';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <Todos />
        </QueryClientProvider>
    )
}

function Todos() {
    const { isPending, error, data } = useQuery({
        queryKey: ["todos"],
        queryFn: () => coreCoursesGetCourses().then((res) => res.json(), ),
    });

    if (isPending)
    {
        return 'Loading...';
    }

    if (error)
    {
        return 'error';
    }

    return (<div>
        {data.map((dataEntry) => (
            <div>
            <p>id: {dataEntry.shortname}</p>
            </div>
        ))}
        </div>);
}

export default App

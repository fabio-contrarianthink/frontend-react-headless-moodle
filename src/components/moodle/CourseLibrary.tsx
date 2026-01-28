import { useQuery } from "@tanstack/react-query";
import type { UserCourse } from "@/types/moodle/course";
import CourseCard from "@/components/moodle/CourseCard";
import LoadingCourseCard from "@/components/moodle/LoadingCourseCard";
import Spinner from "@/components/Spinner";
import { coreEnrolGetUsersCourses } from "@/services/moodle/moodleHeadlessClient";

const moodleUserId = 1013;

export default function CourseLibrary() {
  const { isPending, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => coreEnrolGetUsersCourses(moodleUserId),
  });

  if (isPending) {
    return (
      <div>
        <div className="p-8 flex gap-4 flex-wrap">
          <LoadingCourseCard />
          <LoadingCourseCard />
          <LoadingCourseCard />
        </div>
        <div>
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-8 flex space-x-6">Failed to load Courses</div>;
  }

  return (
    <div className="p-8 flex gap-4 flex-wrap">
      {data.map((dataEntry: UserCourse) => (
        <CourseCard key={dataEntry.id} course={dataEntry} />
      ))}
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import type { UserCourse } from "@/types/moodle/course";
import CourseCard from "@/components/moodle/CourseCard";
import LoadingCourseCard from "@/components/moodle/LoadingCourseCard";
import Spinner from "@/components/Spinner";
import {
  coreEnrolGetUsersCourses,
  getUserIdFromEmail,
} from "@/services/moodle/moodleHeadlessClient";

export interface CourseLibraryProps {
  userEmail: string;
}

function LoadingSkeleton() {
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

export default function CourseLibrary({ userEmail }: CourseLibraryProps) {
  const moodleUserIdQuery = useQuery({
    queryKey: ["moodleUserId", userEmail],
    queryFn: () => getUserIdFromEmail(userEmail),
  });
  const userId = moodleUserIdQuery.data;
  const courseQuery = useQuery({
    queryKey: ["courses", userId],
    queryFn: () => coreEnrolGetUsersCourses(userId!),
    enabled: !!userId,
  });

  if (courseQuery.isPending || moodleUserIdQuery.isPending) {
    return <LoadingSkeleton />;
  }

  if (courseQuery.error) {
    return <div className="p-8 flex space-x-6">Failed to load Courses</div>;
  }

  return (
    <div className="p-8 flex gap-4 flex-wrap">
      {courseQuery.data.map((dataEntry: UserCourse) => (
        <CourseCard key={dataEntry.id} course={dataEntry} />
      ))}
    </div>
  );
}

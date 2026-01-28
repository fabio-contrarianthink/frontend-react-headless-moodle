import type { UserCourse } from "@/types/moodle/course";

interface CourseCardProps {
  course: UserCourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="max-w-xs min-w-xs rounded-md shadow-lg inset-shadow-xs flex-1 overflow-hidden">
      <div className="">
        <div className="">
          <img src={course.courseimage} className="h-auto max-w-full"></img>
        </div>
        <div className="font-bold text-base py-3 px-6">
          {course.displayname}
        </div>
      </div>
    </div>
  );
}

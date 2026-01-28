import type { UserCourse } from "@/types/moodle/course";

interface CourseCardProps {
  course: UserCourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="card bg-base-100 w-70 shadow-sm">
      <figure>
        <img
          src={course.courseimage}
          alt="Course Image"
          className="h-auto max-w-full"
        ></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-serif">{course.displayname}</h2>
      </div>
    </div>
  );
}

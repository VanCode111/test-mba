import React, { useEffect, useState } from "react";
import { getCourses } from "../../api/coursesApi";
import "./Programms.scss";
import { ProgrammCard } from "..";

function Programms() {
  const [courses, setCourses] = useState([]);

  const filterCourses = ({ count, courses }) => {
    let index = 0;
    let i = 0;
    const filteredCourses = [];
    while (i < count) {
      if (!courses[index]) {
        break;
      }
      if (courses[index].specializedSubjects.length < 10) {
        index += 1;
        continue;
      }
      filteredCourses.push(courses[index]);
      index += 4;
      i++;
    }
    return filteredCourses;
  };

  useEffect(() => {
    const getCoursesHandle = async () => {
      const courses = await getCourses();
      const filteredCourses = filterCourses({ count: 5, courses });
      setCourses(filteredCourses);
    };
    getCoursesHandle();
  }, []);

  return (
    <div className="programms">
      {courses.map(({ title, specializedSubjects, _id }) => {
        return (
          <ProgrammCard
            className="programms__programm"
            title={title}
            key={_id}
            specializedSubjects={specializedSubjects}
          />
        );
      })}
    </div>
  );
}

export default Programms;

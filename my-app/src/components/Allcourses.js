import React, { useState, useEffect } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import {toast} from "react-toastify"
function AllCourse() {

      useEffect(() => {
            document.title = "All Courses";
      }, []);

      const getAllCoursesFromServer = () => {
            axios.get(`${base_url}/courses`).then(
                  (response) => {
                        console.log(response.data);
                        setCourses(response.data);
                        toast.success("done");
                  },
                  (error) => {
                        console.log(error);
                        toast.error("unable to load");
                  }
            );
      };

      useEffect(() => {
            getAllCoursesFromServer();
      }, []);

      const [courses, setCourses] = useState([]);

      const updateCourses=(id)=>{
     setCourses(courses.filter((c)=>c.id!=id));
      }
      return (

            <div>
                  <h1>All Courses</h1>
                  <p>List of courses available : </p>

                  {courses.length > 0 ?
                        courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />
                        ) : "No courses"}
            </div>
      );

}
export default AllCourse;
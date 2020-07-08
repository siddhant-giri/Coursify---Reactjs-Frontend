import React, { useState, useEffect } from 'react';
import Course from './Course';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';


const AllCourse = () => {

    useEffect(()=>{
        document.title="All Courses || Enjoy Code With Coursify";
    },[]);

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`/courses`).then(
            (response) => {
                //success
                console.log(response.data);
                toast.success("Courses has been Loaded",{position:"top-center"});
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        
        );
    };

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);



    const [courses,setCourses] = useState([
        // {title:"Evergreen Java Course",description:"A wonderful Evergreen concept of Java"},
        // {title:"AllRounder Javascript Course",description:"Course for a very booming language with simple explanation"},
        // {title:"Easy Python",description:"Want to be an ML & AI engineer ? Start with the easy python Course"},


    ]);

    const updateCourses=(courseId)=>{
        setCourses(courses.filter((c)=>c.courseId != courseId));
    }


    return (
        <div>
            <h1 className="text-left display-4" style={{fontSize:'40px', color:"#3C40C6"}}>All courses available</h1>
            <hr className="w-25 ml-1" style={{backgroundColor:"#3C40C6",borderWidth:"2px"}}/>

            {
                courses.length > 0? courses.map((item)=>(
                    <Course key={item.courseId} course={item} update={updateCourses} />
                )) : "No Courses"
            }

        </div>
    );
}

export default AllCourse;
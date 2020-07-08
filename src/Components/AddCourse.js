import React, {Fragment,useEffect,useState} from 'react';
import { Form, FormGroup, Input,Button,Container } from 'reactstrap';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';

const AddCourse = ()=>{
    useEffect(()=>{
        document.title="Add Courses || Enjoy Code With Coursify";
    },[]);

    const [course,setCourse] = useState({

    })

//form handler function
const handleForm=(e)=>{

    console.log(course);
    postDataToServer(course);
    e.preventDefault();
}

//creating function to POST data on server
const postDataToServer=(data)=>{
    axios.post(`/course`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course Added Successfully");
            setCourse({courseId:"",courseTitle:"",courseDescription:""});
        },(error)=>{
            console.log(error);
            console.log(error);
            toast.error("Some thing went wrong");
        }
    )
}


    return (
        <Fragment>
            <h1 className="text-left display-4" style={{fontSize:'40px', color:"#3C40C6"}}>Fill Course Detail</h1>
            <hr className="w-25 ml-1" style={{backgroundColor:"#3C40C6",borderWidth:"2px"}}/>
            <Form className="mt-4" onSubmit={handleForm}>
                <FormGroup>
                    
                    <Input style={{borderRadius:"25px",borderColor:"#3C40C6",color:"#3C40C6"}} type="text" placeholder="Enter course id here" name="courseId" id="courseId"
                     onChange={(e)=>setCourse({...course,courseId:e.target.value })}/>
                </FormGroup>
                <FormGroup>
                    
                    <Input style={{borderRadius:"25px",borderColor:"#3C40C6",color:"#3C40C6"}} type="text" placeholder="Enter course title here" name="courseTitle" id="courseTitle"
                    onChange={(e)=>setCourse({...course,courseTitle:e.target.value })}/>
                </FormGroup>
                <FormGroup>
                    
                    <Input style={{height:150,borderRadius:"25px",borderColor:"#3C40C6",color:"#3C40C6"}} type="textarea" placeholder="Enter course description Here" name="courseDescription" id="courseDescription"
                    onChange={(e)=>setCourse({...course,courseDescription:e.target.value })}/>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" style={{borderRadius:25}} color="success" outline>
                            Add Course
                    </Button>
                    <Button type="reset" style={{borderRadius:25}} color="warning ml-3" outline>
                            Clear Course
                    </Button>
                </Container>

            </Form>

        </Fragment>
    )
}

export default AddCourse;
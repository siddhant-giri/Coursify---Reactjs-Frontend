import React, {Fragment,useEffect,useState} from 'react';
import { Form, FormGroup, Input,Button,Container } from 'reactstrap';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import {useParams} from 'react-router-dom';

const UpdateCourse = ()=>{

    const {id} = useParams();

    useEffect(()=>{
        document.title="Add Courses || Enjoy Code With Coursify";
        loadUser();
    },[]);

    const [course,setCourse] = useState({
        
    })

    const {courseId,courseTitle,courseDescription} = course;

    console.log(id);

//form handler function
const handlethisForm=(e)=>{

    console.log(course);
    putDataToServer(course);
    e.preventDefault();
}

//creating function to POST data on server
const putDataToServer=(data)=>{
    axios.put(`/course`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course Added Successfully");
        
        },(error)=>{
            console.log(error);
            console.log(error);
            toast.error("Some thing went wrong");
        }
    )
}

//

const loadUser = () => {
    axios.get(`/course/${id}`).then(
        (response) => {
            //success
            console.log(response.data);
            
           setCourse(response.data);
        },
        (error) => {
            //for error
            console.log(error);
            toast.error("Something went wrong");
        }
    
    );
}


    return (
        <Fragment>
            <h1 className="text-left display-4" style={{fontSize:'40px', color:"#3C40C6"}}>Update Course Detail</h1>
            <hr className="w-25 ml-1" style={{backgroundColor:"#3C40C6",borderWidth:"2px"}}/>
            <Form onSubmit={handlethisForm}>
                <FormGroup>
                   
                    <Input type="text" style={{borderRadius:"25px",borderColor:"#3C40C6",color:"#3C40C6"}} placeholder="Enter course ID" name="courseId" id="courseId"
                    value={courseId}
                    onChange={(e)=>setCourse({...course,courseId:e.target.value })}
                     />
                </FormGroup>
                <FormGroup>
                    
                    <Input type="text" style={{borderRadius:"25px",borderColor:"#3C40C6",color:"#3C40C6"}} placeholder="Enter course title Here" name="courseTitle" id="courseTitle" value={courseTitle}
                    onChange={(e)=>setCourse({...course,courseTitle:e.target.value })}/>
                </FormGroup>
                <FormGroup>
                    
                    <Input type="textarea" placeholder="Enter course description Here" name="courseDescription" id="courseDescription" style={{height:150,borderRadius:"25px",borderColor:"#3C40C6",color:"#3C40C6"}}
                    value={courseDescription}
                    onChange={(e)=>setCourse({...course,courseDescription:e.target.value })}/>
                </FormGroup>

                <Container className="text-center">
                    <Button style={{borderRadius:25}} type="submit" color="success" outline>
                            Update Course
                    </Button>
                    <Button style={{borderRadius:25}} type="reset" color="warning ml-3" outline>
                            Clear Course
                    </Button>
                </Container>

            </Form>

        </Fragment>
    )
}

export default UpdateCourse;
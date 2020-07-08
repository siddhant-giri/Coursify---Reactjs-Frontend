import React , {useState} from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button,Container ,
   Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import {Link} from 'react-router-dom';






const Course = ({course,update}) => {

    
      
      const [modal, setModal] = useState(false);
      const [backdrop, setBackdrop] = useState(true);
      const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

    const deleteCourse=(courseId)=>{
        axios.delete(`/course/${courseId}`).then(
            (response)=>{
                toast.success('Course Deleted Successfully :)');
                update(courseId);
            },
            (error)=>{
                toast.error('Something Went Wrong :(');
            }
        )
    }





return(
    <div>
    <Card className="text-center mt-4" style={{borderRadius:"10px",background:"#4834DF", color:"white"}}>
        <CardBody>
            <CardSubtitle className="font-weight-bold">
                {course.courseTitle}
            </CardSubtitle>
            <CardText>
                {course.courseDescription}
            </CardText>
            <Container className="text-center">
                <Button color="danger" style={{borderRadius:"25px"}} onClick={()=>{
                    deleteCourse(course.courseId);
                }}>Delete</Button>
                <Button style={{borderRadius:"25px"}} color="warning ml-3"><Link style={{textDecoration:"none",color:"black"}} to={`/update-course/${course.courseId}`}>Update</Link></Button>
            
                <Button style={{borderRadius:"25px"}} color="primary ml-3" onClick={toggle}>View Course</Button>
            </Container>
        </CardBody>
    </Card>
    <Modal isOpen={modal} toggle={toggle}  backdrop={backdrop} keyboard={keyboard}>
            <ModalHeader toggle={toggle}>{course.courseTitle}</ModalHeader>
        <ModalBody>
          {course.courseDescription}
        </ModalBody>
        <ModalFooter>
          <Button style={{borderRadius:"25px"}} color="primary" onClick={toggle}>View more....</Button>{' '}
          <Button style={{borderRadius:"25px"}} color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
);
}

export default Course;
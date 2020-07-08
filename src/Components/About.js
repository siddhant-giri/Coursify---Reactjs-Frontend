import React,{useEffect} from 'react';
import { Button, Container,Row,Col } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import AboutImg from './../images/aboutcoursify.png';

const About = () => {

    useEffect(()=>{
        document.title="About || Enjoy Code With Coursify";
    },[])

    return(
        <div>
            <h1 className="text-left display-4" style={{fontSize:'40px', color:"#3C40C6"}}>About Us</h1>
            <hr className="w-25 ml-1" style={{backgroundColor:"#3C40C6",borderWidth:"2px"}}/>
            <Container className="pb-5">
      
      <Row>
        <Col md={7}>
         <p>
             Coursify is a WebApp created by using Spring Boot as backend and ReactJs as frontend
         </p>
         <p>
             Its a basic CRUD App. Which means it is used to create , read, update and delete the courses.
         </p>
         <p>
             You can create wide variety of courses using Coursify.
         </p>
         <p>
             Hope so you will enjoy the experience of using this app. :)
         </p>
         
       

        
        </Col>
        <Col md={5}>
       <img className="img-fluid" style={{height:"220px",width:"350px"}} src={AboutImg}/>
        </Col>
      </Row>

      
    </Container> 
        </div>
    );
}


export default About;
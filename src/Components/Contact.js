import React,{useEffect} from 'react';
import { Button, Container,Row,Col } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


const Contact = () => {

    useEffect(()=>{
        document.title="Contact || Enjoy Code With Coursify";
    },[]);

return(
    <div>
        <h1 className="text-left display-4" style={{fontSize:'40px', color:"#3C40C6"}}>Contact Us</h1>
            <hr className="w-25 ml-1" style={{backgroundColor:"#3C40C6",borderWidth:"2px"}}/>
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                            <p>Get in Contact with us and also follow us on social media</p>
                    </Col>
                    <Col md={6}>
                    <SocialIcon className="ml-2" url="https://www.linkedin.com/in/siddhant-giri-83491a171/" />
                        <SocialIcon className="ml-2" url="behance.net/siddhantgiri" />
                        <SocialIcon className="ml-2" url="github.com/sidgiri55555" />
                        <SocialIcon className="ml-2" url="https://www.youtube.com/channel/UCCkSg82mVDIE1mX_nBpW8ug" />
                    </Col>
                    
                </Row>
            </Container>
    </div>
);
}

export default Contact;
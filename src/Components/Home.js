import React,{useEffect} from 'react'
import {Jumbotron,Container,Button,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import HomeImg from './../images/coursifyhome.png'

const Home = () => {

    useEffect(()=>{
        document.title="Home || Enjoy Code With Coursify";
    },[])

    return(
        <div>
            <Jumbotron className="text-left" style={{background:"white", color:"#4834DF",height:"350px",borderColor:"#4834DF",borderWidth:"2px",borderStyle:"solid",borderRadius:"10px"}}>
            <Container className="pb-5">
      
      <Row>
        <Col md={7}>
        <h1 className="display-5">Enjoy Learning with Coursify</h1>
                <p>
                    This is a platform provided by Coursify for a better learning experience
                    and get a core knowledge of a subject.
                </p>
                <Container className="text-center mt-1">
                    <Link className="list-group-item list-group-item-action mb-3 text-center btn-success"  style={{borderRadius:"30px",borderWidth:"2px",borderColor:"#3C40C6",background:"#4834DF",color:"white"}} to="/add-course" action>Start Using</Link>
                </Container>
       

        
        </Col>
        <Col md={5}>
       <img className="img-fluid" style={{height:"220px",width:"350px"}} src={HomeImg}/>
        </Col>
      </Row>

      
    </Container> 
                
                
            </Jumbotron>

        </div>
    );
}


export default Home;
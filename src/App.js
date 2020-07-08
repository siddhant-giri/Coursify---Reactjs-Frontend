import React from 'react';
import './App.css';
import { Button, Container,Row,Col } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import Home from './Components/Home';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import Header from './Components/Header';
import Menus from './Components/Menus';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import UpdateCourse from './Components/UpdateCourse';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';






function App() {
  const btnhandle = () => {
    toast.error("my first msg",{
    position:"top-center"});
  }

  return(
<div>

<Router>
    <ToastContainer />
    <Header />
    <Container className="pb-5">
      
      <Row>
        <Col md={4}>
         
        <Menus />

        
        </Col>
        <Col md={8}>
       <Route path="/" component={Home} exact/>
       <Route path="/add-course" component={AddCourse} exact/>
       <Route path="/view-courses" component={AllCourses} exact/>
       <Route path="/update-course/:id" component={UpdateCourse} exact/>
       <Route path="/about" component={About} exact/>
       <Route path="/contact" component={Contact} exact/>
        </Col>
      </Row>

      
    </Container>    
   
    </Router>
    <Footer />  

</div>
    
  );

}

export default App;

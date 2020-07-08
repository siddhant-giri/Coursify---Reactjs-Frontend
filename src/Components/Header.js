import React from 'react';
import {Jumbotron,Container,Button} from 'reactstrap';
import Image from './../images/coursifybgimg.jpg'

export default function Header({ name,title,para }) {
    return (
        <div>
<Jumbotron className="text-center" style={{width: "100%",
  height: "250px",
  backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  opacity:"0.7"}}>
        <h1 className="display-3 font-weigth-bold" style={{color:"white"}}>Coursify</h1>
        <hr className="w-25" style={{backgroundColor:"white",borderWidth:"2px"}}/>
        <p style={{color:"white"}}>
            Welcome to Coursify Application :)
        </p>
    </Jumbotron>
        </div>
    )
}

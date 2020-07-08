import React,{useEffect} from 'react'
import {Jumbotron,Container,Button} from 'reactstrap';


const Footer = () => {
    return(
        <div>
         <Jumbotron className="text-center my-auto" style={{background:"#4C4B4B",color:"white",bottom:0}}>
               
                <p>
                Copyright © 2020-Coursify | By Siddhant Giri
                </p>
                
            </Jumbotron>
        </div>
    );
}


export default Footer;
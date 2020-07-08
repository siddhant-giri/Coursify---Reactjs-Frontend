import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action mb-3 text-center btn-success" style={{borderRadius:"30px",borderColor:"#3C40C6",color:"#4834DF"}} tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action mb-3 text-center btn-success" style={{borderRadius:"30px",borderColor:"#3C40C6",color:"#4834DF"}} tag="a" to="/add-course" action>
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action mb-3 text-center btn-success" style={{borderRadius:"30px",borderColor:"#3C40C6",color:"#4834DF"}} tag="a" to="/view-courses" action>
                View Course
            </Link>
            <Link className="list-group-item list-group-item-action mb-3 text-center btn-success" style={{borderRadius:"30px",borderColor:"#3C40C6",color:"#4834DF"}} tag="a" to="/about" action>
                About
            </Link>
            <Link className="list-group-item list-group-item-action mb-3 text-center btn-success" style={{borderRadius:"30px",borderColor:"#3C40C6",color:"#4834DF"}} tag="a" to="/contact" action>
                Contact
            </Link>
        </ListGroup>

    );
}


export default Menus;
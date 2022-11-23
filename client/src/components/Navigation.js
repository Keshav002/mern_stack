import React, {useContext, useEffect, useState } from 'react'
import "./Navigation.css";
import { NavLink } from 'react-router-dom'
import logoPic from '../images/logo6n.png'
import {UserContext} from '../App';


const Navigation = ({color}) => {
    const {state} = useContext(UserContext);


    const RenderMenu = () => {
        if(state){
            return(
                <>
                     <ul>
                    <li><NavLink to="/" style={{color:color}}>Home</NavLink></li>
                    {/* <li><NavLink to="/about" style={{color:color}}>About</NavLink></li> */}
                    <li><NavLink to="/contact" style={{color:color}}>Contact</NavLink></li>
                    <li><NavLink to="/logout" style={{color:color}}>Logout</NavLink></li>
                    <span className="user">{show?<li className="username" style={{color:color}}>{userName}</li>:""}</span>   
            </ul>
                </>
            )
        }else{
            return(
                <>
                <ul>
                    <li><NavLink to="/" style={{color:color}}>Home</NavLink></li>
                    {/* <li><NavLink to="/about" style={{color:color}}>About</NavLink></li> */}
                    <li><NavLink to="/contact" style={{color:color}}>Contact</NavLink></li>
                    <li><NavLink to="/login" style={{color:color}}>Login</NavLink></li>
                    <li><NavLink to="/signup" style={{color:color}}>Register</NavLink></li>  
               </ul>
                </>
            )
        }
    }
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const [userName, setUserName] = useState("");
    const callNavPage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            //console.log(data);
			    setUserName(data.name);
          setShow(true);
        } catch (err) {
          //  console.log(err);
        }
    }
    useEffect(() => {
        callNavPage();
    }, []);
 

    return (
        <nav className="navbar">
            {/* <div className="brand-title" style={{color:color}}>iBid.</div> */}
            <div className="brand-title"><img src={logoPic} alt="logo"/></div>
            
        <a href="#0" className="toggle-button" onClick={() => setOpen(!open)}>  {/*toggle button */}
                <span className="bar" style={{backgroundColor:color}}></span>
                <span className="bar" style={{backgroundColor:color}}></span>
                <span className="bar" style={{backgroundColor:color}}></span>
            </a>
            
            <div className={`navbar-links ${open ? 'active' : ''}`}>
                <RenderMenu />
           
        </div>
    </nav>

            )
}

 export default Navigation

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


export default function Navbar(props){
    const navigate = useNavigate();
    console.log(props.isLogged, "a");
    function handleSignIn(){
        navigate("/")
    }

    function handleSignUp(){
        navigate("/signup")
    }

    return (
        <nav>
            <div className="project--title" onClick={() => {navigate("/home")}}>
                GlucoSense
            </div>
            {!props.isLogged && 
            <div className="right--nav">
                <button className='signIn--btn nav-btn' onClick={handleSignIn}>
                    Sign In
                </button>
                <button className='signUp--btn nav-btn' onClick={handleSignUp}>
                    Sign Up
                </button>
            </div>
            }
        </nav>
    )
}
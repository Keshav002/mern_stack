import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import loginPic from '../images/login.jpg'
import {UserContext} from '../App';

function Login() {
    const {dispatch}=  useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }else{
            dispatch({type:"USER", payload:true});
            window.alert("Login Successfull");
            history.push('/');
        }
    }
    return (
        <div>
            
            <section class="sign-in">
            <div class="page-container">
                <div class="signin-content">

                    <div class="signin-image">
                        <figure><img src={loginPic} alt=""/></figure>
                        <NavLink to="/signup" class="signup-image-link">Create an account</NavLink>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign In</h2>
                        <form class="register-form" method="POST" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Email" value={email}
                                    onChange={(e) =>setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" value={password}
                                    onChange={(e) =>setPassword(e.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"
                                    onClick={loginUser}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


        </div>
    )
}

export default Login

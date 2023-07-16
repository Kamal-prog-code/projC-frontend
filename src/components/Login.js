import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIService from "./APIService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useCookies} from 'react-cookie';

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['token'])
    let navigate = useNavigate()

    useEffect(()=>{
        var user_token = token['token']
        if(String(user_token)==='undefined'){
            navigate('/login')
        }
        else{
            
            toast("Login Success")
            setTimeout(function(){
                navigate('/')
                window.location.reload();
             }, 1000);
        }
    },[token,navigate])
    
    const submitHandler = () => {

        if(email.trim().length!==0 && password.trim().length){
            APIService.LoginUser({email,password})
            .then(
                resp => {
                    if(resp.errorType){
                        toast(resp.errorType,"-",resp.errorMessage)
                    }
                    else{
                        setToken('token',resp.token)
                    }
                    
                }
            )
            .catch(error => { toast(error)})
        }
        else{
            navigate('/login')
            toast("Creds are Manditory")
        }
    }
    
    return (
        <div className="App">
            <div className='modal'>
                <center><h1 className='main-title'></h1></center>
                <div className='splitScreen'>
                    <img alt='logo' style={{ width: "50%" }} className='responsive' src="idea_connect.png" />
                    <form className='modal-content' style={{ width: "50%" }} onSubmit={submitHandler}>
                    <h3>Sign In</h3><br/>
                    <div>
                    <p className='dont-have'>Don't have an account? <a href="#">Sign Up</a></p>
                    <br/>
                    </div>

                    <div>
                        <label>Email Address/Mobile Number</label><br/>
                        <input className='input-feild input_form' type='text' name='email'
                        placeholder='Enter Email ID/Mobile Number'
                        onChange ={e=> setEmail(e.target.value)}
                        value={email}/><br/><br/><br/>
                    </div>
                    
                    <div>
                        <label>Password</label><br/>
                        <input class="input_form" type='password' name='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange ={e=> setPassword(e.target.value)}/><br/><br/>
                    </div>
                    <div className='remenber-forgot'>
                    <label>
                    <input type="checkbox" name="remember"/> Remember me
                    </label><br/>
                        <a href="javascript:void(0)" className='forgot_align'>Forgot password</a><br/><br/>
                    </div>
                    <center>
                        <button  className='sign-btn'>Sign In</button><br/><br/>
                        <a href='#'>Login with OTP</a><br/><br/><br/><hr/>
                    </center>
                    <center>
                        <p>Idea Connect. All rights reserved.</p>
                        <a href='#'>Privacy Policy</a>
                        </center>
                    </form>
                </div>
            </div>
            <ToastContainer/>        
        </div>
    )
}

export default Login
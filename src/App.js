import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [data,setData] = useState({
    email : '',
    password :'',
  });
  const {email,password}={...data}
  const changeHanddler =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const token_id = null;
  const submitHandler=(e)=>{
    e.preventDefault();
    (async () => {
      const rawResponse = await fetch('https://projc.herokuapp.com/api/v1/app/login/',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
          'Accept'  : 'application/json',
          'Content-Type' : 'application/json',
          // 'Authorization' : 'Token {token_id}'
        }
      });
      const content = await rawResponse.json();
      if(rawResponse.status==200){

        token_id = content["token"];
      }
      else{
        alert(content["errorType"]);
      }
      console.log(content);
    })();
  }

  return (

        <div className='modal'>
          <center><h1 className='main-title'></h1></center>
          <div className='splitScreen'>
            <img alt='logo' style={{ width: "50%" }} className='responsive' src="idea_connect.png" />
            <form className='modal-content' style={{ width: "50%" }} onSubmit={submitHandler}>
              <h3>Sign In</h3><br/>
              <div>
              <p className='dont-have'>Don't have an account? <a href='#'>Sign Up</a></p>
              <br/>
              </div>

              <div>
                <label>Email Address/Mobile Number</label><br/>
                <input className='input-feild input_form' type='text' name='email'
                placeholder='Enter Email ID/Mobile Number'
                onChange={changeHanddler}
                value={email}/><br/><br/><br/>
              </div>
              
              <div>
                <label>Password</label><br/>
                <input class="input_form" type='password' name='password'
                placeholder='Enter Password'
                value={password}
                onChange={changeHanddler}/><br/><br/>
              </div>
              <div className='remenber-forgot'>
              <label>
              <input type="checkbox" name="remember"/> Remember me
              </label><br/>
                <a href='#' className='forgot_align'>Forgot password</a><br/><br/>
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
  )
}

export default App
          
            
          
        

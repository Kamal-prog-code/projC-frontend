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
          <center>
          <h1 className='main-title'>
          KREDILY
          </h1>
        </center>
        <form className='modal-content' onSubmit={submitHandler}>
          <h3>Sign In</h3><br/>
          <div>
          <p className='dont-have'>Don't have an account? <a href='#'>Sign Up</a></p>
          <br/>
          </div>

          <div>
            <label>Email Address/Mobile Number</label><br/>
            <input className='input-feild' type='text' name='email'
             placeholder='Eneter Emial ID/Mobile Number'
             onChange={changeHanddler}
             value={email}/><br/><br/><br/>
          </div>
          
          <div>
            <label>Password</label><br/>
            <input type='password' name='password'
             placeholder='Eneter Password'
             value={password}
             onChange={changeHanddler}/><br/><br/>
          </div>
          <div className='remenber-forgot'>
          <label>
          <input type="checkbox" checked="checked"
           name="remember"/> Remember me
          </label><br/>
            <a href='#'>Forgot password</a><br/><br/>
          </div>
            <button  className='sign-btn'>Sign In</button><br/><br/>
            <a href='#'>Login with OTP</a><br/><br/><br/><hr/>
            <p>Kredily.All rights reserved.</p>
            <a href='#'>Privacy Policy</a></form>
        </div>
        
     
  )
}

export default App
          
            
          
        
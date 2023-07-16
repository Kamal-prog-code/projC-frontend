import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Login from "./components/Login";
import Signup from "./components/SignUp";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import { useState,useEffect } from "react";

// const App = () => {
//   const [data,setData] = useState({
//     email : '',
//     password :'',
//   });
//   const {email,password}={...data}
//   const changeHanddler =(e)=>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const token_id = null;
//   const submitHandler= async (e)=>{
//     e.preventDefault();
//     (async () => {
//       const rawResponse = await fetch('https://projc.herokuapp.com/api/v1/app/login/',{
//         method:'POST',
//         body:JSON.stringify(data),
//         headers:{
//           'Accept'  : 'application/json',
//           'Content-Type' : 'application/json',
//           // 'Authorization' : 'Token {token_id}'
//         }
//       });
//       const content = await rawResponse.json();
//       if(rawResponse.status==200){

//         token_id = content["token"];
//       }
//       else{
//         alert(content["errorType"]);
//       }
//       console.log(content);
//     })();
//   }
function App() {
  
  const [token] = useCookies(['token'])
        
  const[islogged, setLogged] = useState(false);

  useEffect(()=>{
    var user_token = token['token']
    if(String(user_token)!=='undefined'){
      setLogged(true);
    }
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar data={islogged}/>
        <Routes>
          <Route path='/login' element={<Login />}/>  
          <Route path='/signup' element={<Signup />}/>
          
        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}

export default App
          
            
          
        

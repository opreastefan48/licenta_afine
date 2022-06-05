import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import "./login.css";



function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const [Accounts, setAccounts] = useState([
    {
      username:'',
      password:'',
      admin: '',
    }
  ])

  useEffect(()=>{
    getDataFromDb()

    setIsLoggedIn(JSON.parse(window.localStorage.getItem('isloggedin')))
          console.log(isloggedin)

  },[])

  function getDataFromDb(){
    axios.get('http://localhost:8080/api/getAccount')
    .then(function (response) {
      setAccounts(response.data)
    })
  }
  
          console.log(Accounts)

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];


    const userData = Accounts.find((user) => user.username === uname.value);


    if (userData) {
      if (userData.password !== pass.value) {

        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  const [isloggedin, setIsLoggedIn]=useState()
 

  if(isSubmitted){
    window.localStorage.setItem('isloggedin','true')
    console.log('sunt logat')
    console.log(isloggedin)
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const navigate = useNavigate();


  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
    <div className="login-form">
      <div className="title">Sign In</div>
      {isloggedin ? <div>User is successfully logged in{navigate("/home")}</div> : renderForm}
    </div>
  </div>

    
  );
}

export default Login;
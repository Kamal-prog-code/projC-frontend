import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });

  const { firstName, lastName, email, mobileNumber, password, confirmPassword } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://projc.herokuapp.com/api/v1/app/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.status === 200) {
        // Signup successful, handle the response accordingly
        console.log('Signup successful:', data);
      } else {
        // Signup failed, handle the response accordingly
        console.error('Signup failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="firstNameInput">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            name="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastNameInput"
            name="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumberInput">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumberInput"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPasswordInput"
            name="confirmPassword"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Signup;

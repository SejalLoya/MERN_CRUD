

import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PostUser = () => {
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    phone:""
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const {name,value} = event.target;
    setUserData({
      ...userData,
      [name]:value,
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/user",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userData)
    })
    const data = await response.json();
    console.log(data);
    navigate("/");

    } catch (error) {
      console.error(error.message);

    }
    
  }

  return (
    <>
      <div style={{margin:'10% 20%',backgroundColor:'grey',padding:'5%'}}>
        <h1>Post New User</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type='text'
              name='name'
              placeholder='Enter your Name'
              value={userData.name}
              onChange={handleInputChange}
              />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type='email'
              name='email'
              placeholder='Enter your Email'
              value={userData.email}
              onChange={handleInputChange}
              />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control  
              type='text'
              name='phone'
              placeholder='Enter Phone Number'
              value={userData.phone}
              onChange={handleInputChange}
              />
          </Form.Group>
          <Button type="submit">Add User</Button>
        </Form>
      </div>
    </>
  )
}

export default PostUser;
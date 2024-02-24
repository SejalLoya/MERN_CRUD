import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';

const UpdateUser = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    phone:""
  });
  const handleInputChange = (event) => {
    const {name,value} = event.target;
    setUserData({
      ...userData,
      [name]:value,
    });
  }
  useEffect(() => {
    const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/${id}`)
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log("Error while fetching users list:", error.message);
    }
  }
  fetchUser();
  },[id])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/user/${id}`,{
      method:'PATCH',
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
        <h1>Update User</h1>
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
          <Button type="submit">Update User</Button>
        </Form>
      </div>
    </>
  )
}

export default UpdateUser;
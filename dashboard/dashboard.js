import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user")
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error while fetching users list:", error.message);
    }
  }
  useEffect(() => {
  fetchUsers();
  },[])

  const handleUpdate=(userId) => {
    navigate(`/user/${userId}`);
  }

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}`,{
      method:"DELETE"
    });
    console.log(response)
    if(response.ok){
      fetchUsers();
    }
    } catch (error) {
      console.log("Error while deleting user:", error.message);
    }
  }
  return (
    <div className='m-5'>
    <h1 style={{textAlign:'center'}}>Dashboard</h1>
    <table class="table table-striped hover responsive border">
    <thead>
      <tr>
        <th style={{padding:'25px',width:'20%'}}>Name</th>
        <th style={{padding:'25px',width:'20%'}}>Email</th>
        <th style={{padding:'25px',width:'20%'}}>Phone</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user)=>(
        <tr key={user._id}>
          <td style={{paddingLeft:'25px'}}>{user.name}</td>
          <td style={{paddingLeft:'25px'}}>{user.email}</td>
          <td style={{paddingLeft:'25px'}}>{user.phone}</td>
          <td>
            <Button
              variant='dark'
              onClick={() => handleUpdate(user._id)}
              >
                Update
              </Button>
          </td>
          <td>
            <Button
              variant='danger'
              onClick={() => handleDelete(user._id)}
              >
                Delete
              </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  );
}

export default Dashboard;
import React from 'react'
import { useState  } from 'react';
import { Link, redirect, useMatch, useNavigate } from 'react-router-dom';

function registerpriest() {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cost,setCost]=useState('');
  const [work,setWork]=useState('');
  const [contact,setContact]=useState('');
  const [error,setError]=useState('');

  const handlesubmit=(e)=>{
    e.preventDefault();

    if (contact.length !== 10 || isNaN(contact)) {
      setError("Contact number must be exactly 10 digits.");
      return;
    }
    const data={
      email,
      username,
      cost,
      work,
      password,
      contact
    }
    console.log(data);
    fetch('http://localhost:3000/registerpriest',
    {
    method: 'POST',
     headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
        setUsername('');
        setEmail('');
        setPassword('');
        setContact('');
        setCost('');
        setWork('');
  navigate('/priestprofile', { state: { username,email } });
  

  }
  
  return (
    <>
    
    <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "40px",
  gap: "20px", 
}} id='container'>

  <div id="Heading">
    <h3 style={{ 
      fontSize: "2rem", 
      color: "#2c3e50", 
      marginBottom: "20px", 
      textAlign: "center", 
      letterSpacing: "1px" 
    }}>Create Account</h3>
  </div>

  <div>
    <form style={{
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "15px", 
      width: "100%", 
      maxWidth: "400px", 
      padding: "20px",
      backgroundColor: "#fff", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
      borderRadius: "8px", 
    }} onSubmit={handlesubmit}>
      <input required onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder='Username' style={{
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        transition: "border-color 0.3s ease",
      }} />
      <input required onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' style={{
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        transition: "border-color 0.3s ease",
      }} />
      <input required onChange={(e)=>{setWork(e.target.value)}} type="text" placeholder='Work' style={{
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        transition: "border-color 0.3s ease",
      }} />
      <input required onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' style={{
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        transition: "border-color 0.3s ease",
      }} />
      <input required onChange={(e)=>{setCost(e.target.value)}} type="number" placeholder='cost' style={{
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        transition: "border-color 0.3s ease",
      }} />
      <input required onChange={(e)=>{setContact(e.target.value)}} type="number" placeholder='Contact No' style={{
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        transition: "border-color 0.3s ease",
      }} />
      <input  type="submit" value="Submit" style={{
        padding: "12px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#007BFF", // Blue button for a strong call-to-action
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }} />
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </form>
  </div>

  <div id="Login" style={{ marginTop: "10px" }}>
    <p style={{ 
      
      color: "#666", 
      fontSize:"1.2rem",
      textAlign: "center" 
    }}>
      Already have an account? <Link style={{ 
        color: "#007BFF", 
        textDecoration: "none", 
        fontWeight: "500", 
        fontSize:"1.2rem",
        transition: "color 0.3s ease", 
      }} to='/loginpriest'>Log In</Link>
    </p>
  </div>
</div>

    
    </>
  )
}

export default registerpriest;
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Registeruser() {
  const navigate = useNavigate();
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [contact, setContact] = useState('');
const [date, setDate] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  
  const data = {
    email,
    username,
    password,
    contact,
    date
  };
  
  const inputDate = new Date(date);
  const today = new Date();
  const currentYear = today.getFullYear();
  const nextYear = currentYear + 1;
  
  const inputYear = inputDate.getFullYear();
  const inputMonth = inputDate.getMonth();
  const inputDay = inputDate.getDate();
  
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  // Validate the year and month
  if (inputYear < currentYear || inputYear > nextYear) {
    setError("Date must be within the current year or the next year." );
    return;
  }

  // Validate the month and day
  if (inputYear === currentYear) {
    if (inputMonth < currentMonth || (inputMonth === currentMonth && inputDay < currentDay)) {
      setError("Date cannot be in the past.");
      return;
    }
  }
  
  fetch('http://localhost:3000/registeruser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    // Handle the response or redirect
    setUsername('');
    setEmail('');
    setPassword('');
    setContact('');
    navigate('/userprofile', { state: { username } });
  })
  .catch(err => {
    console.error('Error:', err);
    setError({ message: "An error occurred during registration." });
  });
}

  return (
    <>
    <div id="Heading">
  <h3 style={{ 
    fontSize: "2rem", 
    color: "#2c3e50", 
    marginBottom: "20px", 
    textAlign: "center", 
    letterSpacing: "1px" 
  }}>Create Account</h3>
</div>

<div style={{
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column"
}}>
  <form style={{
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "15px", 
    width: "100%", 
    maxWidth: "400px", 
    padding: "20px", 
    backgroundColor: "#fff", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    borderRadius: "8px", 
  }} onSubmit={handleSubmit}>
    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='Username' style={{
      width: "100%", 
      padding: "10px", 
      fontSize: "1rem", 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      outline: "none",
      transition: "border-color 0.3s ease", 
    }} />
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' style={{
      width: "100%", 
      padding: "10px", 
      fontSize: "1rem", 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      outline: "none",
      transition: "border-color 0.3s ease", 
    }} />
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' style={{
      width: "100%", 
      padding: "10px", 
      fontSize: "1rem", 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      outline: "none",
      transition: "border-color 0.3s ease", 
    }} />
    <input onChange={(e)=>{setContact(e.target.value)}} type="number" placeholder='Contact' style={{
      width: "100%", 
      padding: "10px", 
      fontSize: "1rem", 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      outline: "none",
      transition: "border-color 0.3s ease", 
    }} />
    <input onChange={(e)=>{setDate(e.target.value)}} type='date' placeholder='Contact' style={{
      width: "100%", 
      padding: "10px", 
      fontSize: "1rem", 
      border: "1px solid #ccc", 
      borderRadius: "5px", 
      outline: "none",
      transition: "border-color 0.3s ease", 
    }} />
    <input type="submit" value="Submit" style={{
      width: "100%", 
      padding: "12px", 
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#007BFF", 
      border: "none",
      borderRadius: "5px", 
      cursor: "pointer",
      transition: "background-color 0.3s ease", 
    }} />
  </form>
  <div style={{
   marginTop: '10px',
    textAlign: 'center',
  }}><p>Already a user.<Link style={{
     color: '#007bff', 
    textDecoration: 'none', 
    fontWeight: 'bold',
  }} to='/loginuser'>Log in</Link></p></div>
</div>
{error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

    </>
  )
}

export default Registeruser
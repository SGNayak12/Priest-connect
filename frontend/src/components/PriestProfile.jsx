import React,{useState,useEffect} from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
function PriestProfile() {
    const navigate=useNavigate();
    const location = useLocation();
    const { username } = location.state || {};
    const { email } = location.state || {};

    const [userDetails, setUserDetails] = useState({
        newusername: '',
        email: '',
        password: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('Updated User Details');

        
    };

  return (
    <>
    
    
      <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // Center horizontally and vertically
  flexDirection:"column",
  height: "100vh", // Full viewport height
  backgroundColor: "#e9ecef", // Optional background color for the page
}}>
<div>
        <button style={{
            display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',

    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom:"10px"
        }}><Link style={{
            textDecoration:"none"
        }} to='/'> Sign out</Link></button>
    </div>
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Space between the two sections
    flexDirection: "row", // Row layout to align items horizontally
    gap: "30px", // Space between user details and update form
    padding: "20px", // Padding around the container
    width: "80vw", // Width of the container
    maxWidth: "1000px", // Limit the max width for larger screens
    backgroundColor: "#f8f9fa", // Background color for the container
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    borderRadius: "8px", // Rounded corners for a modern look
  }}>

    {/* User Details Section */}
    <div style={{
      flex: 1, // Occupies half of the container
      display: "flex",
      flexDirection: "column", // Stack items vertically
      gap: "10px", // Space between text items
      padding: "20px", // Padding within the user details section
    }}>
      <h3 style={{ fontSize: "1.5rem", color: "#007BFF" }}>Welcome to the Profile Page</h3>
      <h3 style={{ fontSize: "1.2rem", color: "#333" }}>{username}</h3>
      <h3 style={{ fontSize: "1.2rem", color: "#333" }}>{email}</h3>

    </div>


    <div style={{
      flex: 1, 
      display: "flex",
      flexDirection: "column", 
      gap: "15px", 
      padding: "20px",
      backgroundColor: "#ffffff", 
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
      borderRadius: "8px", 
    }}>
      <h2 style={{ fontSize: "1.5rem", color: "#007BFF" }}>Update Priest Details</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label style={{ fontSize: "1rem", color: "#333" }}>Username:</label>
          <input
            type="text"
            name="username"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label style={{ fontSize: "1rem", color: "#333" }}>Email:</label>
          <input
            type="email"
            name="email"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label style={{ fontSize: "1rem", color: "#333" }}>Password:</label>
          <input
            type="password"
            name="password"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>
        <button type="submit" style={{
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}>Update</button>
      </form>
    </div>

  </div>

</div>

    
    </>
  )
}

export default PriestProfile
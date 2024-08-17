import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <header>
        <nav id="navbar" style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15vh",
    backgroundColor: "#2c3e50", // Darker, more professional background
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Slightly larger shadow for depth
    padding: "0 40px", 
  }}>
          <div id='webSiteName'>
            <h2 style={{ 
        fontSize: "2rem", 
        color: "#ecf0f1", // Lighter text color for contrast
        fontWeight: "bold", 
        letterSpacing: "1.5px" // Added letter spacing for elegance
      }} id="navbar-brand">Online Pooja Services</h2>
          </div>
          <div id="navbar-left" >
            <ul style={{
        display: "flex",
        listStyle: "none",
        gap: "30px", // Increased gap for a spacious feel
        margin: 0,
        padding: 0,
      }}>
                <li><Link style={{ 
            textDecoration: "none", 
            color: "#ecf0f1", // Lighter text color for contrast
            fontSize: "1.3rem", 
            fontWeight: "500",
            padding: "5px 0",
            transition: "color 0.3s ease",
          }} to="/">Home</Link></li>
                <li><Link style={{ 
            textDecoration: "none", 
            color: "#ecf0f1", // Lighter text color for contrast
            fontSize: "1.3rem", 
            fontWeight: "500",
            padding: "5px 0",
            transition: "color 0.3s ease",
          }} to="/About">About</Link></li>
                <li><Link style={{ 
            textDecoration: "none", 
            color: "#ecf0f1", // Lighter text color for contrast
            fontSize: "1.3rem", 
            fontWeight: "500",
            padding: "5px 0",
            transition: "color 0.3s ease",
          }} to="/Services">Services</Link></li>
                <li><Link style={{ 
            textDecoration: "none", 
            color: "#ecf0f1", // Lighter text color for contrast
            fontSize: "1.3rem", 
            fontWeight: "500",
            padding: "5px 0",
            transition: "color 0.3s ease",
          }} to="/Contact">Contact</Link></li>
            </ul>
          </div>
          <div id="navbar-right">
              <Link to="/registepriest"><button style={{
          padding: "12px 30px",
          fontSize: "1.3rem",
          color: "#fff",
          backgroundColor: "#e74c3c", // Matching button color to text highlight
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "15px",
          transition: "background-color 0.3s ease",
        }} id="signup">Priest Signin</button></Link>
          </div>
            
        </nav>
    </header>
    </>
  )
}

export default Navbar;
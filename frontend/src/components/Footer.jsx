import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
function Footer() {
  return (
   <>
<footer>
  <div style={{
    height: "12vh", // Increased height for a more prominent footer
    backgroundColor: "#2c3e50", // Dark background for contrast
    padding: "20px 0", 
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)", 
    display: "flex", // Flexbox for better layout control
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#ecf0f1", // Light text color for contrast
  }} id="footer">
    <p style={{
      textAlign: "center",
      marginBottom: "10px",
      fontSize: "1rem", 
    }}>
      &copy; 2024 Priest Service. All rights reserved.
    </p>
    <ul style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px", // Increased gap for better spacing
      listStyle: "none",
      margin: 0,
      padding: 0,
    }}>
      <li>
        <Link style={{ 
          textDecoration: "none", 
          color: "#e74c3c", // Accent color matching the rest of the site
          fontSize: "1rem",
          transition: "color 0.3s ease",
        }} to="/about">About</Link>
      </li>
      <li>
        <Link style={{ 
          textDecoration: "none", 
          color: "#e74c3c", 
          fontSize: "1rem",
          transition: "color 0.3s ease",
        }} to="/contact">Contact</Link>
      </li>
      <li>
        <Link style={{ 
          textDecoration: "none", 
          color: "#e74c3c", 
          fontSize: "1rem",
          transition: "color 0.3s ease",
        }} to="/privacy">Privacy Policy</Link>
      </li>
      <li>
        <Link style={{ 
          textDecoration: "none", 
          color: "#e74c3c", 
          fontSize: "1rem",
          transition: "color 0.3s ease",
        }} to="/terms">Terms of Service</Link>
      </li>
    </ul>
  </div>
</footer>

   </>
  )
}

export default Footer
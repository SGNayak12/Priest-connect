import React from 'react'
import {Link} from 'react-router-dom'
import Image2 from '/images/Image2.jpg'
import '../App.css'
function Home() {
  return (
    <>
    <body>
  <div style={{
    height: "85vh",
    backgroundColor: "#ecf0f1", // Lighter background for contrast
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px", // Increased gap for a spacious layout
    padding: "0 20px", // Padding to ensure content doesn't touch the edges
  }} id='page1'>
    <div id='images' style={{
  display: "flex", // Align images side by side
  gap: "20px", // Space between images
  width: "auto", // Adjust width automatically based on content
  height: "auto",
}}>
  <img style={{
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    objectFit:"cover" 
  }} src='/images/Image1.jpg' alt="Image1" />
  
  <img style={{
    width: "300px", // Ensure both images have the same width
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
  }} src='/images/Image2.jpg' alt="Image2" />
</div>

    <div id='text' style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "10px", // Increased gap for better spacing
      color: "#2c3e50", // Darker text color for readability
      textAlign: "center",
      maxWidth: "500px", // Limit text width for better readability
    }}>
      <p style={{ fontSize: "1.8rem", fontWeight: "600" }}>
        Every <span style={{ color: "#e74c3c" }}>Ceremony</span> comes only once
      </p>
      <p style={{ fontSize: "1.8rem", fontWeight: "600" }}>
        We help you make it <span style={{ color: "#e74c3c" }}>Memorable</span>
      </p>
      <Link to='/registeruser'>
        <button style={{
          padding: "12px 30px",
          fontSize: "1.2rem",
          color: "#fff",
          backgroundColor: "#e74c3c", // Matching button color to text highlight
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "15px",
          transition: "background-color 0.3s ease",
        }} id="request">Book a request</button>
      </Link>
    </div>
  </div>

  <div style={{
    height: "80vh",
    backgroundColor: "#ecf0f1", 
    display: "flex",
    flexDirection: "row",
    gap:"10px",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px", 
  }} id='page2'>
    <div style={{
  marginBottom: '20px',
  padding: '10px',
  width:"450px",
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
}} id='event1'>
  <img style={{
    width: "250px",
    height: "250px",
    objectFit: "cover",
    borderRadius: '8px',
  }} src="/images/marriage.jpg" alt="Marriage Photo" />
  <p style={{
    marginTop: '10px',
    fontSize: '16px',
    color: '#333',
  }}>Celebrate the union of love and commitment at our exquisite marriage event. Experience a day filled with joy, elegance, and unforgettable memories.</p>
</div>

<div style={{
  marginBottom: '20px',
  padding: '10px',
  width:"450px",
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
}} id='event2'>
  <img style={{
    width: "250px",
    height: "250px",
    objectFit: "cover",
    borderRadius: '8px',
  }} src="/images/Image2.png" alt="Event Photo" />
  <p style={{
    marginTop: '10px',
    fontSize: '16px',
    color: '#333',
  }}>Welcome into your new home with our traditional Gruha Pravesh ceremony. Embrace new beginnings with blessings, rituals, and heartfelt celebrations</p>
</div>

    <div id='event3'></div>

    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "40px", // Space between service descriptions
    }}>
      
    </div>
  </div>
</body>

    </>
  )
}

export default Home
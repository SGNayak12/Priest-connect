import React, { useState } from 'react';

const UserProfile = () => {
    const [event, setEvent] = useState('');
    const [priests, setPriests] = useState([]);  
    const [error, setError] = useState(null);    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/getpriest",{
                method:"POST",
                headers: {
                            'Content-Type': 'application/json',
                        },
                 body: JSON.stringify({ event }),       
            })
            const data = await response.json();
            console.log(data)
            setPriests(data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setPriests([]);
        }

    
    };

    return (
        <>
           <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  margin: "auto"
}}>

  <div style={{
    marginBottom: "20px",
    textAlign: "center",
  }}>
    <p style={{ fontSize: "1.5rem", color: "#007BFF" }}>Welcome to the Profile</p>
  </div>

  <div style={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  }}>
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
      maxWidth: "400px",
    }}>
      <label htmlFor='event-name' style={{
        fontSize: "1rem",
        color: "#333",
        marginBottom: "5px",
      }}>Enter the Event Name:</label>
      <input
        type="text"
        id="event-name"
        placeholder='Event name'
        onChange={(e) => setEvent(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          outline: "none",
          fontSize: "1rem",
          width: "100%",
        }}
      />
      <input
        type="submit"
        value="Submit"
        style={{
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      />
    </form>

    <div style={{
      marginTop: "20px",
      width: "100%",
    }}>
      {priests.length > 0 ? (
        <ul style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
          display: "flex",
          flexDirection: "row",
          gap: "15px",
        }}>
          {priests.map((priest, index) => (
            <li key={index} style={{
              padding: "15px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              border: "1px solid #ddd",
            }}>
              <p style={{ margin: "5px 0", fontSize: "1rem", color: "#333" }}>Username: {priest.username}</p>
              <p style={{ margin: "5px 0", fontSize: "1rem", color: "#333" }}>Email: {priest.email}</p>
              <p style={{ margin: "5px 0", fontSize: "1rem", color: "#333" }}>Work: {priest.work}</p>
              <p style={{ margin: "5px 0", fontSize: "1rem", color: "#333" }}>Work: {priest.cost}</p>
              <p style={{ margin: "5px 0", fontSize: "1rem", color: "#333" }}>Contact: {priest.contact}</p>
              {/* Add other properties if needed */}
              <button style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            marginTop: "15px",
          }}>Book an event</button>
            </li>
          ))}
          
        </ul>
      ) : (
        <p style={{ fontSize: "1rem", color: "#666" }}>No priests found</p>
      )}
    </div>
  </div>
</div>

         
            

        </>
    );
};


export default UserProfile;

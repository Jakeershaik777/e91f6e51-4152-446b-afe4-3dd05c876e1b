import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0070BB',
      color:'white',
      height: '100px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
      border: '1px solid #ccc',
      fontFamily: 'Comic Sans MS',
      fontSize:'20px'
    }}>
      <div>
        <Link to="/" style={{ textDecoration: 'none' ,color:'white'}}>Birthday Event</Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', color:'white'}}>
          <Link to="/bookevent" style={{ marginRight: '20px', textDecoration: 'none',color:'white' }}>Book Event</Link>
          <Link to="/viewbookedevent" style={{ textDecoration: 'none',color:'white' }}>View Booked event</Link>
        </div><div>
          <Link to="/login" style={{ textDecoration: 'none' ,color:'white'}}>Logout</Link>
        </div>
    </nav>
  );
}

export default Navbar;
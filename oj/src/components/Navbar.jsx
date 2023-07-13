import React, { useState } from 'react';
import './Navbar.css';
import Modal from './Modal.jsx'

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleSignIn = (email, password) => {
      // Handle sign in logic here
      console.log('Email:', email);
      console.log('Password:', password);
      closeModal();
    };
  
    // Rest of the code...
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">LeetClone</h1>
          <ul className="nav-links">
            <li className="nav-link">Home</li>
            <li className="nav-link">Problems</li>
            <li className="nav-link">Submissions</li>
            <li className="nav-link">Leaderboard</li>
            <li className="nav-link">
              <button className="sign-in-button" onClick={openModal}>Sign In</button>
            </li>
          </ul>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} onSignIn={handleSignIn} />
      </nav>
    );
  }
  

export default Navbar;

import React, { useState } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
    setEmail('');
    setPassword('');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-heading">Sign In to Leetclone </h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <div className="modal-buttons">
            <button type="submit" className="modal-button">Sign In</button>
            <button type="button" className="modal-button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;

import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!username.trim()) {
      setErrorMessage('Please enter a username');
      setCurrentPage('error');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username.trim() }),
      });

      if (response.ok) {
        const user = await response.json();
        setUserData(user);
        setCurrentPage('user');
      } else {
        setErrorMessage('User not found');
        setCurrentPage('error');
      }
    } catch (error) {
      setErrorMessage('Connection error. Make sure the backend is running.');
      setCurrentPage('error');
    }
  };

  const goBackToLogin = () => {
    setCurrentPage('login');
    setUsername('');
    setUserData(null);
    setErrorMessage('');
  };

  // Login Page
  if (currentPage === 'login') {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Login Page</h1>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', width: '200px' }}
          />
        </div>
        <button
          onClick={handleLogin}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Login
        </button>
        <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
          <p>Try these usernames: akash, Salim, Ahone, Mary</p>
        </div>
      </div>
    );
  }

  // User Page
  if (currentPage === 'user') {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>User Information</h1>
        <div style={{ marginBottom: '20px', fontSize: '18px' }}>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Sex:</strong> {userData.sex}</p>
        </div>
        <button
          onClick={goBackToLogin}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Back to Login
        </button>
      </div>
    );
  }

  // Error Page
  if (currentPage === 'error') {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Error</h1>
        <p style={{ color: 'red', fontSize: '18px' }}>{errorMessage}</p>
        <button
          onClick={goBackToLogin}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Back to Login
        </button>
      </div>
    );
  }
}

export default App;
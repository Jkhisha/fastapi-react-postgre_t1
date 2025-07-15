import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username.trim()) {
      navigate('/error?message=Please enter a username');
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
        navigate(`/users/${username.trim()}`);
      } else {
        navigate('/error?message=User not found');
      }
    } catch (error) {
      navigate('/error?message=Connection error');
    }
  };

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
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Login
      </button>
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <p>Try: akash, Salim, Ahone, Mary</p>
      </div>
    </div>
  );
}

export default LoginPage;
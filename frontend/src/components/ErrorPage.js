import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get('message') || 'An error occurred';

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Error</h1>
      <p style={{ color: 'red', fontSize: '18px' }}>{message}</p>
      <button
        onClick={() => navigate('/')}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Back to Login
      </button>
    </div>
  );
}

export default ErrorPage;
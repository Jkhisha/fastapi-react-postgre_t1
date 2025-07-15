import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserPage() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        });

        if (response.ok) {
          const user = await response.json();
          setUserData(user);
        } else {
          navigate('/error?message=User not found');
        }
      } catch (error) {
        navigate('/error?message=Connection error');
      }
    };

    fetchUser();
  }, [username, navigate]);

  if (!userData) {
    return <div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>User Information</h1>
      <div style={{ marginBottom: '20px', fontSize: '18px' }}>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Sex:</strong> {userData.sex}</p>
      </div>
      <button
        onClick={() => navigate('/')}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Back to Login
      </button>
    </div>
  );
}

export default UserPage;
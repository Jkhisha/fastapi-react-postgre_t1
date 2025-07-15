This is a tutorial for getting started with postgresql, react, react-route, FastAPI
1. Setting up environments.
    a. Install Python (for FastAPI backend).
    b. Install Node.js (for React frontend).
    c. Install pgAdmin for database viewing.
    d. Create a python env in root directory.
2. Create a simple db in postgresql.
    a. Enter pgAdmin.
    b. CREATE DATABASE userdb;
    c. CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INTEGER NOT NULL,
            sex VARCHAR(10) NOT NULL
        );

    d. INSERT INTO users (name, age, sex) VALUES 
        ('akash', 28, 'male'),
        ('Salim', 55, 'male'),
        ('Ahone', 21, 'female'),
        ('Mary', 51, 'female');

3. Create 2 folders frontend and backend in the root directory.
4. In the backend folder, create 2 files requirement.txt and main.py.
    a. Navigate to backend folder activate python env and execute in python env : pip install -r requirements.txt
    b. Start server execute: python main.py

5. In the frontend folder execute following
    a. Create react app : npx create-react-app .
    b. Inside src folder create or replace App.js
    c. Create a folder called components create 3 js files ErrorPafge, LoginPage, UserPage.
    d. npm install
    e. npm start


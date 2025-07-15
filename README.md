This is a tutorial for getting started with postgresql, react, react-route, FastAPI
1. Setting up environments.
    1. Install Python (for FastAPI backend).
    2. Install Node.js (for React frontend).
    3. Install pgAdmin for database viewing.
    4. Create a python env in root directory.
2. Create a simple db in postgresql.
    1. Enter pgAdmin.
    2. CREATE DATABASE userdb;
    3. CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INTEGER NOT NULL,
            sex VARCHAR(10) NOT NULL
        );

    4. INSERT INTO users (name, age, sex) VALUES 
        ('akash', 28, 'male'),
        ('Salim', 55, 'male'),
        ('Ahone', 21, 'female'),
        ('Mary', 51, 'female');

3. Create 2 folders frontend and backend in the root directory.
4. In the backend folder, create 2 files requirement.txt and main.py.
    1. Navigate to backend folder activate python env and execute in python env : pip install -r requirements.txt
    2. Start server execute: python main.py

5. In the frontend folder execute following
    1. Create react app : npx create-react-app .
    2. Inside src folder create or replace App.js
    3. Create a folder called components create 3 js files ErrorPafge, LoginPage, UserPage.
    4. npm install
    5. npm start




from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from pydantic import BaseModel

app = FastAPI()

# Allow React frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection
def get_db_connection():
    try:
        conn = psycopg2.connect(
            host="localhost",
            database="userdb",
            user="postgres",
            password="joytu"  # Replace with your actual password
        )
        return conn
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return None

# Request model
class LoginRequest(BaseModel):
    username: str

# Response model
class UserResponse(BaseModel):
    name: str
    age: int
    sex: str

@app.get("/")
def read_root():
    return {"message": "FastAPI Backend is running!"}

@app.post("/login")
def login(request: LoginRequest):
    conn = get_db_connection()
    if not conn:
        raise HTTPException(status_code=500, detail="Database connection failed")
    
    try:
        cursor = conn.cursor()
        # Search for user (case-insensitive)
        cursor.execute(
            "SELECT name, age, sex FROM users WHERE LOWER(name) = LOWER(%s)",
            (request.username,)
        )
        user = cursor.fetchone()
        
        if user:
            return UserResponse(name=user[0], age=user[1], sex=user[2])
        else:
            raise HTTPException(status_code=404, detail="User not found")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
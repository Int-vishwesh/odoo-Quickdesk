# backend/main.py
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import the router from your new auth.py file
from auth import router as auth_router

# --- FastAPI App Initialization ---
app = FastAPI(title="QuickDesk API")

# Allow your Next.js frontend at localhost:3000 to call the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the QuickDesk API"}

# --- Run the App ---
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

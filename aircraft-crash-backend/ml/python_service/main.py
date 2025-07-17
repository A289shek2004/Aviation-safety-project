# ml/python_service/main.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pickle
import numpy as np
import uvicorn

# Define request structure
class CrashFeatures(BaseModel):
    feature1: float
    feature2: float
    feature3: float
    # Add all required features here

# Load trained model
try:
    with open("model.pkl", "rb") as f:
        model = pickle.load(f)
except Exception as e:
    print(f"Failed to load model: {e}")
    model = None

# Initialize FastAPI app
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Aviation Crash ML Predictor is running."}

@app.post("/predict")
def predict_crash(data: CrashFeatures):
    if not model:
        raise HTTPException(status_code=500, detail="Model not loaded.")
    
    features = np.array([[data.feature1, data.feature2, data.feature3]])
    prediction = model.predict(features)
    return {"prediction": int(prediction[0])}

# Uncomment to run with `python main.py`
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)

# python/predict.py
import sys
import json
import pickle

def load_model():
    with open("model.pkl", "rb") as f:
        return pickle.load(f)

def main():
    # Load input (e.g., flight info)
    input_json = sys.argv[1]
    input_data = json.loads(input_json)

    model = load_model()

    # Dummy: Replace with your model's input format
    features = [
        input_data['weather_score'], 
        input_data['fatigue_level'], 
        input_data['maintenance_overdue']
    ]

    prediction = model.predict([features])
    print(json.dumps({"risk": float(prediction[0])}))

if __name__ == "__main__":
    main()

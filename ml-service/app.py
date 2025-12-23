from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load trained model and scaler
kmeans = joblib.load("kmeans.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/cluster", methods=["POST"])
def cluster_task():
    data = request.json

    features = np.array([[
        data["priority"],
        data["estimatedTime"],
        data["complexity"]
    ]])

    features_scaled = scaler.transform(features)
    cluster = int(kmeans.predict(features_scaled)[0])

    return jsonify({
        "cluster": cluster
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)

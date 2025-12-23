import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import joblib

# ================================
# 1. Load the cleaned dataset
# ================================
df = pd.read_csv("data/tasks.csv")

# Use only numeric features for ML
X = df[["priority", "estimatedTime", "complexity"]]

# ================================
# 2. Scale the data
# ================================
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# ================================
# 3. Train K-Means model
# ================================
kmeans = KMeans(
    n_clusters=3,
    random_state=42,
    n_init=10
)

kmeans.fit(X_scaled)

# ================================
# 4. Save model and scaler
# ================================
joblib.dump(kmeans, "kmeans.pkl")
joblib.dump(scaler, "scaler.pkl")

print("✅ K-Means model trained and saved successfully")

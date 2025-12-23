import json
import pandas as pd

# Load raw task data
with open("data/tasks.json", "r") as f:
    tasks = json.load(f)

# Mapping priority strings to numbers
priority_map = {
    "low": 1,
    "medium": 2,
    "high": 3,
    "critical": 4
}

clean_rows = []

for task in tasks:
    clean_rows.append({
        # FIX 1: convert string priority to number
        "priority": priority_map.get(task.get("priority", "medium"), 2),

        # FIX 2: guarantee numeric values (fallback defaults)
        "estimatedTime": int(task.get("estimatedTime", 2)),
        "complexity": int(task.get("complexity", 2))
    })

# Convert to DataFrame
df = pd.DataFrame(clean_rows)

# Save clean dataset
df.to_csv("data/tasks.csv", index=False)

print("✅ tasks.csv created with numeric features")

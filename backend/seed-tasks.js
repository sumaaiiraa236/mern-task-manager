
require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const Task = require("./models/Task");


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/mern_tasks";


const jsonPath = path.join(__dirname, "synthetic_data", "synthetic_tasks.json");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));


function mapToSchemaFormat(item) {
  return {
    title: item.title,
    description: item.description,

    
    status:
      item.status === "Done"
        ? "completed"
        : item.status === "In Progress"
        ? "in-progress"
        : "pending",

    
    priority:
      item.priority === "High"
        ? "high"
        : item.priority === "Medium"
        ? "medium"
        : "low",

    
    dueDate: new Date(item.dueDate),
  };
}

async function run() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected");

    console.log("🧹 Clearing old tasks...");
    await Task.deleteMany({});

    const formattedData = data.map(mapToSchemaFormat);

    console.log("📥 Inserting tasks...");
    await Task.insertMany(formattedData);

    console.log(`✅ Inserted ${formattedData.length} tasks`);
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected");
    process.exit(0);
  }
}

run();

import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    deadline: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    priority: {
      type: String,
      required: true,
      enum: ["Low", "Medium", "High"],
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    complete: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);

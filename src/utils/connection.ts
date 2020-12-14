import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.z19mc.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

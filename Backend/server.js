import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import reservationRouter from "./routes/reservationRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

// database se connection kr liye
connectDB();

// cloudinary ko import
connectCloudinary();

// middleware setup
app.use(express.json()); // json request body parsing ke liye
app.use(cors()); // cross-origion req allow krta hai

//API ROUTES
app.use("/api/user", userRouter); // user or admin
app.use("/api/product", productRouter); // product
app.use("/api/cart", cartRouter); // cart data
app.use("/api/order", orderRouter); // orders
app.use("/api/reservation", reservationRouter); //reservation

//root endpoints to check api status
app.get("/", (req, res) => {
  res.send("API successfully connected!");
});

app.listen(port, () => console.log(`Server running on PORT: ${port}`));

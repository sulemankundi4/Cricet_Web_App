const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { connectDB } = require("./utils/features");
const { config } = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

const { errorMiddleware } = require("./middlewares/error");
const cricketRoutes = require("./routes/route");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"));

const corsOptions = {
  origin: "http://localhost:5173", // replace with your client's origin
  credentials: true, // this allows the cookie to be sent with the request
};

app.use(cors(corsOptions));

config({
  path: "./.env",
});

connectDB();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/cricket", cricketRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

app.use(errorMiddleware);

require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const userRoute = require("./Routes/userRoute");
const serviceRoute = require("./Routes/serviceRoute");
const bookingRoute = require("./Routes/bookingRoute");
const paymentRoute = require("./Routes/paymentRoute");
const timeSlotRoute = require("./Routes/timeSlotRoute");

const MONGO_DB = process.env.MONGO_DB;
const PORT = process.env.PORT;

app.use(express.json());
// Enable CORS for all routes
app.use(cors({ origin: "http://localhost:3000" }));

//User Route
app.use("/api", userRoute);
//Service Route
app.use("/api", serviceRoute);
//Booking Route
app.use("/api", bookingRoute);
//Payment Route
app.use("/api", paymentRoute);
//TimeSlot Route
app.use("/api", timeSlotRoute);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Booking Management System",
      version: "1.0.0",
      description:
        "Booking Management System covered Create, Read, Update, and Delete operations using a Node.js API",
    },
    servers: [{ url: "http://localhost:5000/api" }],
  },

  apis: ["./Routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

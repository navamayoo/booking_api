require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");


const MONGO_DB = process.env.MONGO_DB;
const PORT = process.env.PORT;


app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello C# Corner.");
   });
   

//app.use(cors({ origin: "http://localhost:3000" }));

// app.post("/api/google-login", async (req, res) => {
//   const { token } = req.body;

//   try {
//     // Verify the token using Google API
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     const { sub, email, name, picture } = payload;

//     // Check if the user exists in the MongoDB database
//     let user = await User.findOne({ googleId: sub });
//     if (!user) {
//       // Create a new user record if not exists
//       user = new User({
//         googleId: sub,
//         email,
//         name,
//         picture,
//       });
//       await user.save();
//     }

//     // Generate a session token for the authenticated user
//     const sessionToken = jwt.sign(
//       { userName: user.name, email: user.email, picture: user.picture },
//       JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     // Send the session token to the client
//     res.json({ success: true, sessionToken });
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     res.status(401).json({ success: false, message: "Invalid token" });
//   }
// });

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

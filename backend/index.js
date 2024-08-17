import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import user from './models/user.model.js';
import priest from './models/priest.model.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://SGNayak12:VMk45d89Sx5PkMSe@cluster1.xo7vol9.mongodb.net/", { dbName: "cluster1" })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Index Page");
});

app.post("/registerpriest", async (req, res) => {
  try {
    const { username, email, password, cost, contact, work } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Username, email, and password are required." });
    }
    if (contact.length !== 10 || isNaN(contact)) {
      return res.status(400).json({ message: "Contact number must be exactly 10 digits." });
    }

    const createdpriest = await priest.create({
      username,
      email,
      password,
      contact,
      cost,
      work
    });

    res.status(201).json({
      message: "User created successfully",
      priest: {
        id: createdpriest._id,
        username: createdpriest.username,
        email: createdpriest.email,
        contact: createdpriest.contact,
        work: createdpriest.work,
        createdAt: createdpriest.createdAt
      }
    });

  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/loginuser", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }
    const existingUser = await user.findOne({ email: email });

    if (!existingUser) {
      return res.status(401).send("Login failed: User not found");
    }

    if (password != existingUser.password) {
      return res.status(401).send("Invalid password");
    }

    res.status(200).send("Login successful");
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/loginpriest", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send("Username, email, and password are required");
    }

    const existingPriest = await priest.findOne({ email: email });

    if (!existingPriest) {
      return res.status(401).send("Login failed: Priest not found");
    }

    if (password != existingPriest.password) {
      return res.status(401).send("Invalid password");
    }

    res.status(200).send("Login successful");
  } catch (error) {
    console.error("Error logging in priest:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/registeruser", async (req, res) => {
  try {
    const { username, email, password, contact, date } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Username, email, and password are required." });
    }

  

    

    const createduser = await user.create({
      username,
      email,
      password,
      contact,
      date
    });

    await createduser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: createduser._id,
        username: createduser.username,
        email: createduser.email,
        contact: createduser.contact,
        date: createduser.date,
        createdAt: createduser.createdAt
      }
    });

  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/updatePriestDetails", async (req, res) => {
  try {
    const { id, username, email, password } = req.body;

    if (!id || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const updatedPriest = await priest.findByIdAndUpdate(id, {
      username,
      email,
      password
    }, { new: true });

    if (!updatedPriest) {
      return res.status(404).json({ message: "Priest not found." });
    }

    res.status(200).json({
      message: "Priest details updated successfully.",
      priest: updatedPriest
    });
  } catch (error) {
    console.error("Error updating priest details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/getpriest", async (req, res) => {
  const { event } = req.body;

  try {
    const priests = await priest.find({ 'work': event });

    if (priests.length === 0) {
      return res.status(404).json({ message: 'No priests found with this event' });
    }
    console.log(priests)
    res.json(priests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log("App listening on Port 3000");
});

const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();
const path = require("path");
const sendMail = require("./sendMail");
const jwt = require("jsonwebtoken");
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library')

const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { log } = require("console");

// // Verify JWT TOken ----

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  // bearer token
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};


// for calender 





const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;
const CLIENT_ID = '1072715479074-b94cftqlul0lopj4qe1vhi36mqhjitc3.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:5173/auth/callback';

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware to verify JWT token and attach user data to the request
// const identifyJWT = (req, res, next) => {
//   const authorization = req.headers.authorization;
//   if (!authorization) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
//   const token = authorization.split(' ')[1];

//   jwt.verify(token, SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
//     req.user = decoded;
//     next();
//   });
// };

// // OAuth2 authentication middleware
// const authenticateWithGoogle = async (req, res, next) => {
//   const code = req.query.code;

//   try {
//     const { tokens } = await oAuth2Client.getToken(code);
//     oAuth2Client.setCredentials(tokens);

//     // Store tokens securely for future use (e.g., in a database).

//     next();
//   } catch (error) {
//     res.status(500).send('Authentication failed.');
//   }
// };

// Route to authenticate and generate JWT token
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username && u.password === password);

//   if (!user) {
//     return res.status(401).json({ message: 'Authentication failed' });
//   }

//   const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
//   res.json({ token });
// });

// // Protected route using verifyJWT middleware
// app.post('/create-event', identifyJWT, async (req, res) => {
//   const { title, description, startDateTime, endDateTime } = req.body;

//   const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

//   const event = {
//     summary: title,
//     description: description,
//     start: { dateTime: startDateTime },
//     end: { dateTime: endDateTime },
//   };

//   try {
//     // Create the event using the 'calendar' object
//     const calendarResponse = await calendar.events.insert({
//       calendarId: 'primary', // Use the primary calendar
//       resource: event,
//     });

//     // Get the created event ID
//     const eventId = calendarResponse.data.id;

//     // You can add more actions here if needed

//     res.json({ message: 'Event created successfully', eventId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Event creation failed.' });
//   }
// });



// const SECRET_KEY = 'your_secret_key'; // Replace with your actual secret key

// Define your users array or use a database for user authentication
// const users = [
//   { id: 1, username: 'user1', password: 'password1' },
//   { id: 2, username: 'user2', password: 'password2' },
// ];

// Create an OAuth2Client with the appropriate scope for Google Calendar API access
// const CLIENT_ID = 'your_client_id'; // Replace with your actual client ID
// const CLIENT_SECRET = 'your_client_secret'; // Replace with your actual client secret
// const REDIRECT_URI = 'http://localhost:5173'; // Replace with your actual redirect URI

// const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
// const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

// Define a middleware to verify JWT
const identifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const token = authorization.split(' ')[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized access' });
    }

    req.decoded = decoded;
    next();
  });
};

// Create a route for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
  res.json({ token });
});

// Protected route using verifyJWT middleware to create a Google Calendar event
app.post('/create-event', verifyJWT, async (req, res) => {
  const { title, description, startDateTime, endDateTime } = req.body;

  // Set the access token for the OAuth2Client from the JWT token
  const userToken = req.headers.authorization.split(' ')[1];
  oAuth2Client.setCredentials({ access_token: userToken });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  const event = {
    summary: title,
    description: description,
    start: { dateTime: startDateTime },
    end: { dateTime: endDateTime },
  };

  try {
    // Create the event using the 'calendar' object
    const calendarResponse = await calendar.events.insert({
      calendarId: 'primary', // Use the primary calendar
      resource: event,
    });

    // Get the created event ID
    const eventId = calendarResponse.data.id;

    // You can add more actions here if needed

    res.json({ message: 'Event created successfully', eventId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Event creation failed.' });
  }
});







// ATSWebsite atswebsite2023
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mq0mae1.mongodb.net/?retryWrites=true&w=majority`
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// node mailer --mailing section --
app.post("/mail", sendMail);
// app.get('/show-mail', async(req,res)=>{
//   const result = await UserCollection.find().toArray();
//   res.send(result);
// })

const uri =
  "mongodb+srv://ATSWebsite:atswebsite2023@cluster0.3besjfn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const UserCollection = client.db("JobSwiftDb").collection("users");
    const jobPostCollection = client.db("JobSwiftDb").collection("posts");
    const applicationsPostCollection = client
      .db("JobSwiftDb")
      .collection("applications");

    //  jwt token
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });

      res.send({ token });
    });

    //  for multer image and resume

    app.post(
      "/upload",
      upload.fields([{ name: "resume" }, { name: "image" }]),
      async (req, res) => {
        const formData = req.body;
        const resumeFilePath = req.files.resume[0].filename; // Accessing resume filename
        const imageFilePath = req.files.image[0].filename; // Accessing image filename
        const educationList = JSON.parse(formData.educationList); // Parse educationList JSON
        const experienceList = JSON.parse(formData.experienceList); // Parse experienceList JSON
        const currentDate = new Date().toISOString();
        try {
          // Assuming you have a MongoDB connection named "db" and a collection named "applicationsPostCollection"
          await applicationsPostCollection.insertOne({
            jobTitle: formData.jobTitle,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phone,
            location: formData.address,
            summary: formData.summary,
            resume: resumeFilePath,
            coverLetter: formData.coverLetter,
            image: imageFilePath,
            date: currentDate,
            educationList: educationList, // Save parsed educationList
            experienceList: experienceList, // Save parsed experienceList
          });

          res
            .status(201)
            .json({ message: "Application submitted successfully" });
        } catch (error) {
          console.error("Error submitting application:", error);
          res.status(500).json({
            message: "An error occurred while submitting the application",
          });
        }
      }
    );

    // post data of a new user
    // app.post("/user", async (req, res) => {
    //   const query = req.body;
    //   const result = await UserCollection.insertOne(query);
    //   res.send(result);
    // });

    // put data as a new user
    app.put("/user/:email", async (req, res) => {
      const email = req.params.email;
      // console.log(email);
      const user = req.body;
      const query = { email: email };
      console.log(query);
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await UserCollection.updateOne(query, updateDoc, options);
      // console.log(result);
      res.send(result);
    });

    // --------------------admin---------------
    // make admin
    app.patch("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: "admin",
        },
      };

      const result = await UserCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // get admin data,is it admin or not
    app.get("/users/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        res.send({ admin: false });
      }
      // console.log(req.decoded.email);
      const query = { email: email };
      console.log(query);
      const user = await UserCollection.findOne(query);
      const result = { admin: user?.role === "admin" };
      res.send(result);
    });

    // verify admin
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await UserCollection.findOne(query);
      if (user?.role !== "admin") {
        return res
          .status(403)
          .send({ error: true, message: "forbidden message" });
      }
      next();
    };

    // get users data  info
    app.get("/users", verifyJWT, verifyAdmin, async (req, res) => {
      const result = await UserCollection.find().toArray();
      res.send(result);
    });

    // delete user
    app.delete("/delete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await UserCollection.deleteOne(query);
      res.send(result);
    });

    // -----------------post job ---------------
    // post a new job
    app.post("/job_post", async (req, res) => {
      const query = req.body;
      const result = await jobPostCollection.insertOne(query);
      res.send(result);
    });
    app.get("/job_post/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobPostCollection.findOne(query);
      res.send(result);
    });

    // get all job post

    app.get("/all-post", async (req, res) => {
      const result = await jobPostCollection.find().sort({ _id: -1 }).toArray();
      res.send(result);
    });

    // post application

    app.post("/application-post", async (req, res) => {
      const query = req.body;
      const result = await applicationsPostCollection.insertOne(query);
      res.send(result);
    });

    // get all application

    app.get("/all-applications/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await applicationsPostCollection.findOne(query);
      res.send(result);
    });

    // sorting get data -and get data all candidates
    app.get("/all-applications", async (req, res) => {
      const sortOrder = req.query.sortOrder || "newest";

      const sortOptions = {};

      if (sortOrder === "newest") {
        sortOptions.date = -1; // Sort by date in descending order (newest first)
      } else if (sortOrder === "oldest") {
        sortOptions.date = 1; // Sort by date in ascending order (oldest first)
      }

      try {
        const result = await applicationsPostCollection
          .find()
          .sort(sortOptions) // Apply the sorting options
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.delete("/delete-candidates", async (req, res) => {
      const candidatesToDelete = req.body; // An array of candidate IDs
      console.log(candidatesToDelete);
      try {
        // Use the `deleteMany` method to delete candidates by their IDs
        const result = await candidatesCollection.deleteMany({
          _id: { $in: candidatesToDelete.map((id) => new ObjectId(id)) },
        });

        if (result.deletedCount > 0) {
          res.status(204).send(); // Successfully deleted candidates
        } else {
          res.status(404).json({ error: "No candidates found for deletion" });
        }
      } catch (error) {
        res.status(500).json({ error: "Error deleting candidates" });
      }
    });

    // resume app.use('/uploads', upload.array("image", "resume"));

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("JobSwift Server is running..");
});

app.listen(port, () => {
  console.log(`JobSwift is running on port ${port}`);
});



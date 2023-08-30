const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();
const path = require("path");

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
            jobTitle:formData.jobTitle,
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
    app.post("/user", async (req, res) => {
      const query = req.body;
      const result = await UserCollection.insertOne(query);
      res.send(result);
    });

    // get users data  info
    app.get("/users", async (req, res) => {
      const result = await UserCollection.find().toArray();
      res.send(result);
    });
    // post a new job
    app.post("/job_post", async (req, res) => {
      const query = req.body;
      const result = await jobPostCollection.insertOne(query);
      res.send(result);
    });

    // get all job post

    app.get("/all-post", async (req, res) => {
      const result = await jobPostCollection.find().toArray();
      res.send(result);
    });

    // post application

    app.post("/application-post", async (req, res) => {
      const query = req.body;
      const result = await applicationsPostCollection.insertOne(query);
      res.send(result);
    });

    // get all application

    app.get("/all-applications", async (req, res) => {
      const result = await applicationsPostCollection.find().toArray();
      res.send(result);
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

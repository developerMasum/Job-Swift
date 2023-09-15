const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();
const path = require("path");
const sendMail = require("./sendMail");
const jwt = require("jsonwebtoken");

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
            stage: formData.stage,
            jobPosterEmail: formData.jobPosterEmail,
            jobId: formData.jobId,
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

    app.get("/all-post/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobPostCollection.findOne(query);
      res.send(result);
    });

    app.patch("/all-post/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const update = { $set: req.body };
      const result = await jobPostCollection.updateOne(query, update);
      res.send(result);
    });
    app.delete("/all-post/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await jobPostCollection.deleteOne(query);
      } catch (error) {
        console.error("Error deleting the post:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

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

    // app.get("/all-applications/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await applicationsPostCollection.findOne(query);
    //   res.send(result);

    // });
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


    // test  get candidate by specific jobs
    app.get('/all-candidate/:email', async (req, res) => {
      const email = req.params.email;
      // console.log(email);
    
      try {
        const result = await applicationsPostCollection
          .find({ jobPosterEmail: email })
          .toArray();
   
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching data');
      }
    });
    

    

    

    // all applicant set stages-----------------------------
    app.patch("/applicant/stage/:id", async (req, res) => {
      const id = req.params.id;
      const stage = req.body.stage;
      console.log(stage);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          stage: stage,
        },
      };

      try {
        const result = await applicationsPostCollection.updateOne(
          filter,
          updateDoc
        );

        if (result.modifiedCount === 1) {
          res.status(200).send(`Updated ${id}'s stage to ${stage}`);
        } else {
          res.status(404).send("Applicant not found");
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    // delete a candidate
    app.delete("/delete-candidate/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await applicationsPostCollection.deleteOne(query);
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

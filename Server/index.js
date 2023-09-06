const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000

// middleware
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')



const uri = "mongodb+srv://ATSWebsite:atswebsite2023@cluster0.3besjfn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})


async function run() {
  try {
    const UserCollection = client.db('JobSwiftDb').collection('users')
    const jobPostCollection = client.db('JobSwiftDb').collection('posts')

    // app.put('/users',async(req,res)=>{
    //   const query = req.
    // })


    // post data of a new user
    app.post('/user', async (req, res) => {
      const query = req.body;
      const result = await UserCollection.insertOne(query)
      res.send(result)
    })


    // get users data  info 
    app.get('/users', async (req, res) => {
      const result = await UserCollection.find().toArray()
      res.send(result)

    })
    // post a new job
    app.post('/job_post', async (req, res) => {
      const query = req.body;
      const result = await jobPostCollection.insertOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('JobSwift Server is running..')
})

app.listen(port, () => {
  console.log(`JobSwift is running on port ${port}`)
})
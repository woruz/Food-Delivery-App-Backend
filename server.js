const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv")


const swagger = require('./swagger');
const { syncDB } = require("./utils/database");
const pricingRoutes = require('./routes/pricingRoutes')


dotenv.config();
const app = express();


app.use(express.json())
app.use(cors())
swagger(app)
syncDB()


app.use('/pricing', pricingRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})

const port = process.env.PORT || 5000
app.listen(port,console.log("Server running"))

const envconfig = require("./config/env.config")
const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./routers/index")
const db = require("./models/index")
const {swaggerUi, specs} = require("./swagger")
const Admin = require("./models/Admin.model")

// middleware config for header and body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// middleware config for requests origin
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}))



// route config
app.use("/api",router)



// swagger configuration
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
        explorer: true,
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: 'Bonasila API Documentation'
}));

// app running on
db.authenticate()
.then(() => {
    console.log("DB Connection has been established successfully.")
    return db.sync({force: false, alter: false})
})
.then(() => {
    console.log("DB Synced")
    
    // Run seeder after sync is complete
    // const productFeed = require("./seeder/Product.seeder")
    // return productFeed()
    // const productSizeFeed = require("./seeder/ProductSize.seeder")
    // return productSizeFeed()
    // const productPriceFeed = require("./seeder/ProductPrice.seeder")
    // return productPriceFeed()
    // const FinishTypeFeed = require("./seeder/FinishType.seeder")
    // return FinishTypeFeed()
    // const ProductFinishFeed = require("./seeder/ProductFinishes.seeder")
    // return ProductFinishFeed()
    // const ProductCollectionFeed = require("./seeder/ProductCollection.seeder")
    // return ProductCollectionFeed()
    // const ProductMediaFeed = require("./seeder/ProductMedia.seeder")
    // return ProductMediaFeed()
})
.then(() => {
    app.listen(envconfig.PORT, () => {
        console.log(`Bonasila is running ${envconfig.NODE_ENV} server : http://localhost:${envconfig.PORT}`)
    })
})
.catch((err) => {
    console.log("Error:", err)
})



// Seeder
// const productFeed = require("./seeder/Product.seeder")
// productFeed()
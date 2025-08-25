const {Router} = require("express")
const router = Router()
const {verifyToken} = require("../middlewares/authHandler")
const adminRouter = require("./admin.v1")
const webRouter = require("./webapi.v1")
const {loginAdmin} = require("../controllers/AdminPanel/admin.controller")

router.post("/v1/admin/login", loginAdmin)
router.use("/v1/admin", verifyToken, adminRouter)
router.use("/v1/web", webRouter)

module.exports = router
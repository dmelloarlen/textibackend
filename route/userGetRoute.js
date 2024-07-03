import express from "express"
import { UserGet } from "../controller/userGetController.js"

const router=express.Router()

router.get("/getUser",UserGet)

export default router

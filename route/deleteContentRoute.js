import express from "express"
import { deleteContent } from "../controller/deleteContentController.js"

const router=express.Router()

router.delete("/ViewContent/:_id",deleteContent)

export default router

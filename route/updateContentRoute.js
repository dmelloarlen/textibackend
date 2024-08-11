import express from "express";
import { updateContent } from "../controller/updateContentcontroller.js";

const router=express.Router()

router.patch("/ViewContent/:_id",updateContent)

export default router


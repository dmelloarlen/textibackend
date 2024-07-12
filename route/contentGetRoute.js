import express from "express";
import { contentGet2 } from "../controller/contentGetController.js";
import { contentGet } from "../controller/contentGetController.js";

const router=express.Router()

router.get("/getContent",contentGet)
router.get("/ViewContent/:_id",contentGet2)

export default router


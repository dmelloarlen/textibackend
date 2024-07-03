import express from "express";
import { contentGet } from "../controller/contentGetController.js";

const router=express.Router()

router.get("/getContent",contentGet)
// router.get("/ViewContent/:_id",contentGet)

export default router


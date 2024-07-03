import express from 'express'
import { notes } from '../controller/contentController.js'

const router=express.Router()

router.post("/notes",notes)

export default router
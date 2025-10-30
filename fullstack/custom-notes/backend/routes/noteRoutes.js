import express from "express";
import { getNotes, addNote, removeNote } from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", addNote);
router.delete("/:id", removeNote);

export default router;

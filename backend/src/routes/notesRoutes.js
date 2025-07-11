import express from "express";
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesControllers.js";
const router = express.Router();

// Get all notes
router.get("/", getAllNotes);

// Get a note by id
router.get("/:id", getNoteById);

// Create a note
router.post("/", createNote);

// Update a note
router.put("/:id", updateNote);

// Delete a note
router.delete("/:id", deleteNote);

export default router;

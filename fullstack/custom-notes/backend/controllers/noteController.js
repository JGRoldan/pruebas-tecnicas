import { getAllNotes, createNote, deleteNote } from "../models/noteModel.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await getAllNotes();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const note = await createNote(title, content, tags);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeNote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteNote(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

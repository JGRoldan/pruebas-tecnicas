import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getNotes, addNote, deleteNote, type Note } from "../api/notesApi";

export const useNotesStore = defineStore("notes", () => {
  const notes = ref<Note[]>([]);
  const activeTag = ref("");

  const loadNotes = async () => {
    notes.value = await getNotes();
  };

  const createNote = async (title: string, content: string, tags: string[]) => {
    await addNote(title, content, tags);
    await loadNotes();
  };

  const removeNote = async (id: number) => {
    await deleteNote(id);
    await loadNotes();
  };

  const allTags = computed(() => {
    const set = new Set<string>();
    notes.value.forEach(n => n.tags.forEach(t => set.add(t)));
    return [...set];
  });

  const filteredNotes = computed(() => {
    if (!activeTag.value) return notes.value;
    return notes.value.filter(n => n.tags.includes(activeTag.value));
  });

  const filterByTag = (tag: string) => (activeTag.value = tag);
  const clearFilter = () => (activeTag.value = "");

  return {
    notes,
    activeTag,
    loadNotes,
    createNote,
    removeNote,
    allTags,
    filteredNotes,
    filterByTag,
    clearFilter,
  };
});

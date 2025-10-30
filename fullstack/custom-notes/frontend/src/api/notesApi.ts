const API = "http://localhost:3000";

export interface Note {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

export async function getNotes(): Promise<Note[]> {
  const res = await fetch(`${API}/notes`);
  return await res.json();
}

export async function addNote(
  title: string,
  content: string,
  tags: string[]
): Promise<Note> {
  const res = await fetch(`${API}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, tags }),
  });
  return await res.json();
}

export async function deleteNote(id: number): Promise<void> {
  await fetch(`${API}/notes/${id}`, { method: "DELETE" });
}

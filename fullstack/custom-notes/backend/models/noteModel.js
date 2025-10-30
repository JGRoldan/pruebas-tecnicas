import pool from "../config/db.js";

export const getAllNotes = async () => {
  const result = await pool.query(`
    SELECT n.*, 
           COALESCE(json_agg(t.name) FILTER (WHERE t.name IS NOT NULL), '[]') AS tags
    FROM notes n
    LEFT JOIN note_tags nt ON n.id = nt.note_id
    LEFT JOIN tags t ON t.id = nt.tag_id
    GROUP BY n.id
    ORDER BY n.id DESC
  `);
  return result.rows;
};

export const createNote = async (title, content, tags) => {
  const noteResult = await pool.query(
    "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
    [title, content]
  );
  const note = noteResult.rows[0];

  for (const tagName of tags) {
    const tagResult = await pool.query(
      "INSERT INTO tags (name) VALUES ($1) ON CONFLICT (name) DO UPDATE SET name=EXCLUDED.name RETURNING *",
      [tagName]
    );
    const tag = tagResult.rows[0];

    await pool.query(
      "INSERT INTO note_tags (note_id, tag_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
      [note.id, tag.id]
    );
  }

  return note;
};

export const deleteNote = async (id) => {
  await pool.query("DELETE FROM notes WHERE id = $1", [id]);
  return { success: true };
};

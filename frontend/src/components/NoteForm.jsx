import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../features/notes/noteSlice";

function NoteForm() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNoteData((prevNoteData) => {
      return {
        ...prevNoteData,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ title: noteData.title, note: noteData.content }));
    // setTitle("");
    // setContent("");
    setNoteData({
      title: "",
      content: "",
    });
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={noteData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="content"
            id="content"
            value={noteData.content}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </section>
  );
}

export default NoteForm;

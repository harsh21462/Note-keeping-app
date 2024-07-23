import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/notes/noteSlice";

function NoteItem({ note }) {
  const dispatch = useDispatch();
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <h4>{note.note}</h4>
      <hr />
      <div className="date">{new Date(note.createdAt).toLocaleString("en-IN")}</div>
      <button className="close" onClick={() => dispatch(deleteNote(note._id))}>
        Delete
      </button>
    </div>
  );
}

export default NoteItem;

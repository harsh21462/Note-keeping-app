import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NoteForm from "../components/NoteForm";
import { getNotes } from "../features/notes/noteSlice";
import { reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import NoteItem from "../components/NoteItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { notes, isLoading, isError, message } = useSelector(
    (state) => state.notes
  );

  console.log(notes);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getNotes());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome <span className="username">{user && user.name}</span></h1>
        <p>Notes Dashboard</p>
      </section>
      <NoteForm />
      <section className="content">
        {notes.length > 0 ? (
          <div className="notes">
            {notes.map((note) => (
              <NoteItem key={note._id} note={note} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;

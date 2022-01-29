import React, { useState } from 'react';
import Note from './Note';

const CreateNote = () => {

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const [storeData, setStoreData] = useState([]);

  const addNote = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  const createNote = (e) => {
    setStoreData((prevData) => {
      return [...prevData, note];
    });

    e.preventDefault();
    console.log(note);
    setNote(() => {
      return {
        title: '',
        content: ''
      };
    });
  }

  const deleteNote = (id) => {
    setStoreData((prevData) => {
      return prevData.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className='create-note-container'>
        <form className='input-form'>
          <input className="cn-titlebox" type="text" name='title' value={note.title} onChange={addNote} placeholder="Add Title" />
          <textarea className="cn-textbox" name='content' value={note.content} onChange={addNote} placeholder="Add a note..."></textarea>
          <button className='cn-btn' onClick={createNote}>+</button>
        </form>
      </div>
      <div className='note-main'>{storeData.map((value, index) => {
        return(
        <Note id={index}
          key={index}
          title={value.title}
          content={value.content} 
          onSelect={deleteNote}/>);
      })}
      </div>
    </>
  );

}
export default CreateNote;
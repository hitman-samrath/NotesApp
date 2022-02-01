import React, { useState } from 'react';
import Note from './Note';

const CreateNote = () => {

  const [hide, setHide] = useState(false);

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
    e.preventDefault();
    console.log(note);

    if (note.title !== '' && note.content !== '') {
      setStoreData((prevData) => {
        return [...prevData, note];
      });
      setNote(() => {
        return {
          title: '',
          content: ''
        };
      });
    }
    else {
      alert('Please fill in the fields');
    }
  }

  const deleteNote = (id) => {
    setStoreData((prevData) => {
      return prevData.filter((value, index) => {
        return index !== id;
      });
    });
  }

  const showHide = () => {
    setHide(true);
  }
  const hideHide = () => {
    setHide(false);
  }

  return (
    <>
      <div className='create-note-container' onDoubleClick={hideHide}>
        <form className='input-form'>


          {hide?
            <input className="cn-titlebox"
            type="text"
            name='title'
            value={note.title}
            onChange={addNote}
            placeholder="Add Title" /> 
            : 
            <input className="cn-titlebox2"
            placeholder="Add a note"
            onClick={showHide}/>}

          {hide ?
            <textarea className="cn-textbox"
              name='content'
              value={note.content}
              onChange={addNote}
              placeholder="Add a note..."
            ></textarea> : null}

          {hide ?
            <button className='cn-btn' 
            onClick={createNote}>+</button> : null}
        </form>
      </div>
      <div className='note-main'>{storeData.map((value, index) => {
        return (
          <Note id={index}
            key={index}
            title={value.title}
            content={value.content}
            onSelect={deleteNote} />);
      })}
      </div>
    </>
  );

}
export default CreateNote;
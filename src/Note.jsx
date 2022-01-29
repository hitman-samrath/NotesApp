import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
  return <div className='note-container'>
    <form className='input-form'>
      <input readOnly placeholder="Title" type='text' value={props.title} className='n-titlebox' />
      <textarea readOnly placeholder="Add your note" className='n-textbox'
        value={props.content}>
      </textarea>
      <button className='cn-btn' 
      onClick = { (e) => {
        e.preventDefault();
        props.onSelect(props.id)
        }}><DeleteOutlineIcon /></button>
    </form>
  </div>;
};

export default Note;
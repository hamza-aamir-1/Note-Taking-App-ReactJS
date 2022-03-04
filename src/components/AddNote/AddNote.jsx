import React, { useState } from 'react'
import './AddNote.css'

const AddNote = () => {

    const input = (event) => {
        setSingleNote(event.target.value);
    }

    const addNoteBtn = () => {
        console.log(singleNote);
        // let expSingleNote = singleNote;
        // export { expSingleNote };
    }

    let [singleNote, setSingleNote] = useState('');

  return (
    <div>
        <div className='box'>
            <textarea name="" rows="10" value={singleNote} onChange={input} className='input' placeholder='Add Note Here....'></textarea>
            <div className='btn-box'>
                <button type='button' onClick={addNoteBtn}>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default AddNote
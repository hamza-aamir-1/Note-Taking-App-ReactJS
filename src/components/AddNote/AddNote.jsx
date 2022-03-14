import React, { useState } from 'react'
import './AddNote.css'

const AddNote = (props) => {

return (
    <div>
      <form className='box' onSubmit={props.submitNote}>
        <textarea className='input' rows={5} onChange={props.changeNote} value={props.noteValue} placeholder='Add Note Here....'></textarea>
        <div className='btn-box'>
          <button type='submit'>ADD</button>
        </div>
      </form>
    </div>
  )
}

export default AddNote
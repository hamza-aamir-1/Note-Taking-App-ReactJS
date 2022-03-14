import React, { useState } from 'react'
import './AddNote.css'

const AddNote = (props) => {

return (
    <div>
        <div>
          <form onSubmit={props.submitNote}>
              <textarea onChange={props.changeNote} value={props.noteValue} placeholder='Add Note Here....'></textarea>
              <div>
                  <button type='submit'>ADD</button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default AddNote
import React, { useState } from 'react'
import './NoteBox.css'

const NoteBox = (props) => {
  return (
    <section className='notesBoxMain'>
        <div className='notesBox'>
            {props.singleNotes}
        </div>
    </section>
  )
}

export default NoteBox
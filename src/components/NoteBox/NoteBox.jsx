import React, { useState } from 'react'
import SingleNote from '../SingleNote/SingleNote'
// import { notesListFun } from '../AddNote/AddNote'

const NoteBox = () => {
  return (
    <div>
        {/* {console.log(notesListFun)} */}
        <SingleNote />
    </div>
  )
}

export default NoteBox
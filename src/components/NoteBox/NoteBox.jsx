import React, { useState } from 'react'
import SingleNote from '../SingleNote/SingleNote'

const NoteBox = (props) => {
  return (
    <div>
        <SingleNote text={props.text}/>
    </div>
  )
}

export default NoteBox
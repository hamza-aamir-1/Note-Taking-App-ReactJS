import React, {useState} from 'react'
import './SingleNote.css'

const SingleNote = (props) => {
  return (
    <div className='single-note-box'>
        <div className='single-note-text'>
            {props.text}
        </div>
        <div>
            <form action="" className='single-note-btn-box'>
                <button type='submit' className='single-note-btn'>Edit</button>
                <button type='submit' className='single-note-btn'>Delete</button>    
            </form>
        </div>
    </div>
  )
}

export default SingleNote
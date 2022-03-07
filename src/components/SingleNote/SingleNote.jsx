import React, {useState} from 'react'
import './SingleNote.css'

const SingleNote = () => {
  return (
    <div className='single-note-box'>
        <div className='single-note-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, vel. Fugiat rerum itaque cupiditate adipisci incidunt labore impedit sapiente, quis est accusantium et eius dolorem illo eligendi suscipit. Expedita, natus!
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
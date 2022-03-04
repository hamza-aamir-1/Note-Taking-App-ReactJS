import React from 'react'
import './AddNote.css'

const AddNote = () => {
  return (
    <div>
        <div className='box'>
            <textarea name="" id="" rows="10" className='input' placeholder='Add Note Here....'></textarea>
            <div className='btn-box'>
                <button>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default AddNote
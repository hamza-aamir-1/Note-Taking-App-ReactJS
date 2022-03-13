import './App.css';
import {useState} from 'react'
// import AddNote from './components/AddNote/AddNote';
import NoteBox from './components/NoteBox/NoteBox';
import SingleNote from './components/SingleNote/SingleNote';

function App() {

  const submitNote = (event) => {
    event.preventDefault();
    setNotesArr([...notesArr, {
      id: Math.random(),
      text: note
    }]);
    setNote('');
  }

  const [note, setNote] = useState('');
  const [notesArr, setNotesArr] = useState([]);

  return (
    <div>
      <h1 className='heading'>
        <span className='heading-one'>Note Taking App</span> <br /> <span className='heading-two'>by Hamza</span>
      </h1>

      <div>
          <form onSubmit={submitNote}>
              <textarea onChange={(event) => setNote(event.target.value)} value={note} placeholder='Add Note Here....'></textarea>
              <div>
                  <button type='submit'>ADD</button>
              </div>
          </form>
      </div>

      <div>
      <NoteBox singleNotes=
          {
            notesArr.map((item) => {
              return (
                <SingleNote text={item.text}/>
              )
            })
          }
      />
      </div>
    </div>
  );
}

export default App;

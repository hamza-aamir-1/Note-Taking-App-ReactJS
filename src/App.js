import './App.css';
import {useState} from 'react'
import AddNote from './components/AddNote/AddNote';
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

      <AddNote 
        submitNote={submitNote}
        changeNote={(event) => setNote(event.target.value)}
        noteValue={note}
      />

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
  );
}

export default App;

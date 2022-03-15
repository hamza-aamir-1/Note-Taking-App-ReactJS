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

  const editNote = (myId) => {
    let myIndex;
    for (let index = 0; index < notesArr.length; index++) {
      if (notesArr[index].id === myId) {
        myIndex = index;
          break;
      }
    }
    console.log(notesArr[myIndex].text)
  }

  const [note, setNote] = useState('');
  const [notesArr, setNotesArr] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

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
                <SingleNote text={item.text} key={item.id} editNote={() => editNote(item.id)}/>
              )
            })
          }
      />
    </div>
  );
}

export default App;

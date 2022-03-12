import './App.css';
import {useState} from 'react'
// import AddNote from './components/AddNote/AddNote';
// import NoteBox from './components/NoteBox/NoteBox';
// import SingleNote from './components/SingleNote/SingleNote';

function App() {

  const submitNote = (event) => {
    event.preventDefault();
    setNotesArr([...notesArr, {
      id: Math.random(),
      text: note
    }]);
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
        <div>
          {
            notesArr.map((item) => {
              return <h1>{item.text}</h1>
            })
          }
        </div>
        <div>
            <form>
                <button type='submit'>Edit</button>
                <button type='submit'>Delete</button>    
            </form>
        </div>
      </div>

      {/* <AddNote />
      <NoteBox text='I am Note Box'/>
      <SingleNote text='I am Single Note'/> */}
    </div>
  );
}

export default App;

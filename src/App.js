import './App.css';
import AddNote from './components/AddNote/AddNote';
import NoteBox from './components/NoteBox/NoteBox';

function App() {
  return (
    <div>
      <h1 className='heading'>
        <span className='heading-one'>Note Taking App</span> <br /> <span className='heading-two'>by Hamza</span>
      </h1>
      <AddNote />
      <NoteBox />
    </div>
  );
}

export default App;

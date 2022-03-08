import './App.css';
import AddNote from './components/AddNote/AddNote';
import NoteBox from './components/NoteBox/NoteBox';
import SingleNote from './components/SingleNote/SingleNote';


function App() {
  return (
    <div>
      <h1 className='heading'>
        <span className='heading-one'>Note Taking App</span> <br /> <span className='heading-two'>by Hamza</span>
      </h1>
      <AddNote />
      <NoteBox text='I am Note Box'/>
      <SingleNote text='I am Single Note'/>
    </div>
  );
}

export default App;

import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Note from "./Components/Note"
import Data from "./Components/NotesData"
import CreateArea from "./Components/CreateArea"
import React from "react"


function App() {
  const [notes,setNotes] = React.useState([...Data]);

  function addNote(note){
    // Data.push(note);
    setNotes(prevNotes =>{
      if(note.title){
        return [...prevNotes,note];
      }else{
        return[...prevNotes];
      }
    });
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div >
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((_Data,index) => {
        return <Note
          key={index}
          id={index}
          heading={_Data.title}
          body={_Data.content} 
          onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;

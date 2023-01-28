import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Note from "./Components/Note"
import Data from "./Components/NotesData"



function App() {

  return (
    <div >
      <Header />
      {Data.map(_Data => {
        return <Note
          key={_Data.key}
          heading={_Data.title}
          body={_Data.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;

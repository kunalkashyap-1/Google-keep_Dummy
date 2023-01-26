
function Note(props){
 return <div className="note">
    <h1>{props.heading}</h1>
    <p>{props.body}</p>
 </div>
}

export default Note;
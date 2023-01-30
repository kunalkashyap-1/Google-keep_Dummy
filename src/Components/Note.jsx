import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Note(props){
   function handleClick(){
      props.onDelete(props.id);
   }

 return <div className="note">
    <h1>{props.heading}</h1>
    <p>{props.body}</p>
    <button onClick={handleClick}><DeleteOutlineOutlinedIcon/></button>
 </div>
}

export default Note;
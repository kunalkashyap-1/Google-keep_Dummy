import React from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';


function CreateArea(props) {
    const [isExpanded, setExapand] = React.useState(false);

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });

    }

    function onSubmit(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input 
                onChange={handleChange} 
                onClick={()=>{setExapand(true)}}
                name= "title"
                value={note.title} 
                placeholder={isExpanded?"Title":"Take a note..."} />
                
                {isExpanded && (<textarea 
                onChange={handleChange} 
                name="content" 
                value={note.content} 
                placeholder="Take a note..." 
                rows="3" />
                )}
                <Zoom
                    in={isExpanded}
                >
                    <Fab onClick={onSubmit} color="success" aria-label="add">
                        <AddBoxIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;

import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{

    const notesInitial = [
        {
          "_id": "65c9c085b4db8e34ca9f9c0a",
          "user": "65bfc6902247415611af9f8a",
          "title": "My First Note",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-02-12T06:53:57.204Z",
          "__v": 0
        },
        {
          "_id": "65d9c085b4db8e34ca9f9c0c",
          "user": "65bfc6902247415611af9f8a",
          "title": "My First Note",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-02-12T06:53:57.735Z",
          "__v": 0
        },
        {
          "_id": "65e9c086b4db8e34ca9f9c0e",
          "user": "65bfc6902247415611af9f8a",
          "title": "My First Note",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-02-12T06:53:58.147Z",
          "__v": 0
        },
        {
          "_id": "65f9c086b4db8e34ca9f9c10",
          "user": "65bfc6902247415611af9f8a",
          "title": "My First Note",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-02-12T06:53:58.414Z",
          "__v": 0
        },
        {
          "_id": "65g9c086b4db8e34ca9f9c12",
          "user": "65bfc6902247415611af9f8a",
          "title": "My First Note",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-02-12T06:53:58.636Z",
          "__v": 0
        },
        {
          "_id": "65h9c086b4db8e34ca9f9c14",
          "user": "65bfc6902247415611af9f8a",
          "title": "My First Note",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-02-12T06:53:58.898Z",
          "__v": 0
        },
        {
          "_id": "65i9f9eb76a3f0ffcfbc4e62",
          "user": "65bfc6902247415611af9f8a",
          "title": "My First Note",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-02-12T10:58:51.189Z",
          "__v": 0
        },
        {
          "_id": "65j9f9eb76a3f0ffcfbc4e64",
          "user": "65bfc6902247415611af9f8a",
          "title": "My First Note",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-02-12T10:58:51.969Z",
          "__v": 0
        }
      ]

     const [notes,setNotes] = useState(notesInitial);

    //  Add a note
    const addNote=(title,description,tag)=>{
      // TODO :- API CALL
      const note = {
        "_id": "65c9c085b4db8e34ca9f9c0a",
        "user": "65bfc6902247415611af9f8a",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-02-12T06:53:57.204Z",
        "__v": 0
      };  
      setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNote = ()=>{}

    // Edit a note
    const editNote = ()=>{}





    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    );
}



export default NoteState;
import './Note.css'
import React from 'react';


//used in NoteList
export default function Note({ id, title, text, isOpen, isFlagged, isSnipped, handleNoteContent, popLeaf, handleLeafSnipped, handleLeafFlagged, numLeaf }) {

    const flagLeaf = function () {
        handleLeafFlagged(id, true);
    }
    const unflagLeaf = function () {
        handleLeafFlagged(id, false);
    }

    const snipLeaf = function () {
        handleLeafSnipped(id, true);
    }
    const growLeaf = function () {
        handleLeafSnipped(id, false);
    }

    function handleFileUpload(e) {
        const target = e.target
    }

    return <>        

    <div className={(isOpen) ? "note" : "note--hidden"}>
        <h2>{title}</h2>
        <textarea className="note-text" rows="20" cols="27" placeholder="Make a note here" onChange={event => handleNoteContent(id, event.target.value)} value={text}></textarea>
        <button className={(id == numLeaf) ? "pop-leaf" : "pop-leaf--hidden"} onClick={popLeaf}>shrink</button>
        <button className="snip-leaf" onClick={isSnipped ? growLeaf : snipLeaf}>{isSnipped ? "grow" : "snip"}</button>
        <button className="flag-leaf" onClick={isFlagged ? unflagLeaf : flagLeaf}>{isFlagged ? "unflag" : "flag"}</button>
    </div>
    </>

}
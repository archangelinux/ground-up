import Note from "./Note.jsx"


export default function NoteList({ notes, handleNoteContent, popLeaf, numLeaf, handleLeafSnipped, handleLeafFlagged }) {
    return (
        notes.map(note => {
            return (
                <Note
                    {...note}
                    key={note.id}
                    title={note.title}
                    text={note.text}
                    handleNoteContent={handleNoteContent}
                    popLeaf={popLeaf}
                    numLeaf={numLeaf}
                    handleLeafSnipped={handleLeafSnipped}
                    handleLeafFlagged={handleLeafFlagged}
                />
            )
        })
    )
}
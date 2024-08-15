import { useState } from 'react'
import { useEffect } from 'react'
import './Planter.css'
import LeafList from './LeafList.jsx'
import NoteList from './NoteList.jsx'


export default function Planter({ planterId, isOpen, title }) {
  //local storage running count of leaves
  const [numLeaf, setNum] = useState(() => {
    const localValue = localStorage.getItem("NUM" + planterId)
    if (localValue == null) return 0
    return JSON.parse(localValue)
  });
  useEffect(() => {
    localStorage.setItem("NUM" + planterId, JSON.stringify(numLeaf))
  }, [numLeaf])

  //local storage stem height
  const [stemHeight, setHeight] = useState(() => {
    const localValue = localStorage.getItem("HEIGHT" + planterId)
    if (localValue == null) return 40
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("HEIGHT" + planterId, JSON.stringify(stemHeight))
  }, [stemHeight])

  //local storage leaf components
  const [leaves, setLeaves] = useState(() => {
    const localValue = localStorage.getItem("LEAVES" + planterId)
    if (localValue == null) return []
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("LEAVES" + planterId, JSON.stringify(leaves))
  }, [leaves])

  //local storage note components
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("NOTES" + planterId)
    if (localValue == null) return []
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("NOTES" + planterId, JSON.stringify(notes))
  }, [notes])


  function newLeaf() {
    setNum(numLeaf + 1);
    setHeight(stemHeight + 50);
    const id = numLeaf + 1;
    setLeaves(currentLeaves => {
      if (id % 2 == 1) {
        return [...currentLeaves, { id: id, isOpen: false, isSnipped: false, isFlagged: false }];
      } else {
        return [...currentLeaves, { id: id, isOpen: false, isSnipped: false, isFlagged: false }];
      }
    })
    setNotes(currentNotes => {
      return [...currentNotes, { id: id, text: "", title: "Question #" + id, isOpen: false, isSnipped: false, isFlagged: false }];
    })
  }


  function popLeaf() {
    if (numLeaf > 0) {
      setNum(numLeaf - 1);
      setHeight(stemHeight - 50);
      setLeaves(currentLeaves => {
        return currentLeaves.filter(leaf => leaf.id != numLeaf);
      })
      setNotes(currentNotes => {
        return currentNotes.filter(note => note.id != numLeaf);
      })
    }
    handleLeafOpen(numLeaf - 1, true) //have the last leaf open
  }

  function handleLeafOpen(id, isOpen) {
    setLeaves(currentLeaves => {
      return currentLeaves.map(leaf => {
        if (leaf.id === id) {
          return { ...leaf, isOpen: isOpen }
        }
        else {
          //ensure only one leaf is open at a time
          if (isOpen) {
            return { ...leaf, isOpen: false }
          }
          else {
            return { ...leaf }
          }
        }

      })
    })
    setNotes(currentNotes => {
      return (currentNotes.map(note => {
        if (note.id === id) {
          return { ...note, isOpen: isOpen }
        }
        else {
          if (isOpen) {
            return { ...note, isOpen: false }
          }
          else {
            return { ...note }
          }
        }
      }))
    })
  }

  function handleLeafSnipped(id, isSnipped) {
    setLeaves(currentLeaves => {
      return currentLeaves.map(leaf => {
        if (leaf.id === id) {
          return { ...leaf, isSnipped: isSnipped }
        }
        else {
          return { ...leaf }
        }
      })
    })
    setNotes(currentNotes => {
      return currentNotes.map(note => {
        if (note.id === id) {
          return { ...note, isSnipped: isSnipped }
        }
        else {
          return { ...note }
        }
      })
    })
  }

  function handleLeafFlagged(id, isFlagged) {
    setLeaves(currentLeaves => {
      return currentLeaves.map(leaf => {
        if (leaf.id === id) {
          return { ...leaf, isFlagged: isFlagged }
        }
        else {
          return { ...leaf }
        }
      })
    })
    setNotes(currentNotes => {
      return currentNotes.map(note => {
        if (note.id === id) {
          return { ...note, isFlagged: isFlagged }
        }
        else {
          return { ...note }
        }
      })
    })
  }


  function handleNoteContent(id, text) {
    setNotes(currentNotes => {
      return (currentNotes.map(note => {
        if (note.id === id) {
          return { ...note, text: text }
        }
        else {
          return { ...note }
        }
      })
      )
    }
    )
  }


  return <div className={isOpen ? "set" : "set--hidden"} >
    <h2>{title}</h2>

    <div className="pot">
      <img id="potImage" src="src/assets/pot.png" ></img>
      <button id="addLeaf" onClick={newLeaf}>+</button>

      <div id="plant">
        <div className="stem" style={{ height: stemHeight }}></div>
        <LeafList leaves={leaves} handleLeafOpen={handleLeafOpen} handleLeafSnipped={handleLeafSnipped} handleLeafFlagged={handleLeafFlagged} />
      </div>


    </div>

    <NoteList notes={notes} handleNoteContent={handleNoteContent} handleLeafSnipped={handleLeafSnipped} handleLeafFlagged={handleLeafFlagged} popLeaf={popLeaf} numLeaf={numLeaf} />
  </div>
}


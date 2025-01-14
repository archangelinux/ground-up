import './GreenhouseButton.css';
import './animations.css';
import { useState } from 'react';
import edit from '../assets/edit.png';
import trash from '../assets/trash.png';

//used in GreenhouseMenu
export default function GreenhouseButton({ ghId, title, handleGhOpen, isOpen, handleDeleteGh, inputDisabled, setInputDisabled}) {
    
    const [inputValue, setInputValue] = useState(title); // Track the input value

    function openGh() {
        handleGhOpen(ghId, true);
    }
    function closeGh() {
        handleGhOpen(ghId, false);
    }

    function renameGh() {
        setInputDisabled(false);
    }

    function deleteGh() {
        handleDeleteGh(ghId);
    }

    function handleInputKeyDown(event) {
        if (event.key === 'Enter') {
            setInputDisabled(true); // Disable input to save the change
        }
    }

    function handleInputChange(event) {
        setInputValue(event.target.value); // Update the input value as user types
    }

    return (<>
        <div className="button-div" >
            <button className={isOpen ? "gh-button--open" : "gh-button"} onClick={isOpen ? closeGh : openGh} disabled = {!inputDisabled}>
                <input className = "rename-input" placeholder = {title}  disabled = {inputDisabled} value={inputValue} // Controlled input value
                        onChange={handleInputChange} // Update state as user types
                        onKeyDown={handleInputKeyDown} // Save on Enter
                        autoFocus={!inputDisabled} />  
            </button>
            <button className="delete" onClick={deleteGh}>
                <img width="25" src={trash} alt = "Delete"></img>
            </button>
            <button className="rename" onClick= {renameGh}>
                <img width="25" src={edit} alt = "Rename"></img>
            </button>
        </div>
    </>
    )
}
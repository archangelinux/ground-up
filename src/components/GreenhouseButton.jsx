import './GreenhouseButton.css';
import './animations.css';
import React, { useState, useRef, useEffect } from 'react';
import greenhouseImage from '../assets/greenhouse.png';
import trash from '../assets/trash.png';
import edit from '../assets/edit.png';

//used in GreenhouseMenu
export default function GreenhouseButton({ ghId, title, isOpen, handleGhOpen, handleDeleteGh, handleRenameGh }) {
    const [inputValue, setInputValue] = useState(title); // track the input value for renaming titles
    const [inputDisabled, setInputDisabled] = useState(true); //track input state for renaming titles
    const inputRef = useRef(null);

    function openGh() {
        handleGhOpen(ghId, true);
    }
    function closeGh() {
        handleGhOpen(ghId, false);
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const renameGh = () => {
        setInputDisabled(false);
        setTimeout(() => {
            inputRef.current.focus();
        }
        );
    }; 
    //handle enter key event to exit renaming
    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleRenameGh(ghId, inputValue);
            setInputDisabled(true);
        }
    };
    //handle click outside to exit renaming
    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            handleRenameGh(inputValue);
            setInputDisabled(true); // Disable input when clicking outside
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // focus the input when it is enabled
    useEffect(() => {
        if (!inputDisabled && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputDisabled]); // trigger only when inputDisabled changes to false
    function deleteGh() {
        handleDeleteGh(ghId);
    }
    return (<>
        <div className="button-div" onClick={isOpen ? closeGh : openGh} >
            <button className={isOpen ? "gh-button--open" : "gh-button"} disabled={!inputDisabled}
                style={{ backgroundImage: `url(${greenhouseImage})` }} >
                <input
                    ref={inputRef}
                    className="rename-input"
                    placeholder={title}
                    disabled={inputDisabled}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    autoFocus={!inputDisabled}
                />
            </button>
            <button className="delete" onClick={(e) => { e.stopPropagation(); deleteGh(); }}>
                <img width="25" src={trash} alt="Delete"></img>
            </button>
            <button className="rename" onClick={(e) => { e.stopPropagation(); renameGh(); }}>
                <img width="25" src={edit} alt="Rename"></img>
            </button>
        </div>
    </>
    )
}
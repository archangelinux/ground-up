import { useState, useRef, useEffect } from 'react';
import './PlanterButton.css';
import './animations.css';
import trashIcon from '../assets/trash-brown.png';
import editIcon from '../assets/edit-brown.png';

import smallLogo from '../assets/smallLogo.png';


//used in PlanterMenu
export default function PlanterButton({ id, title, handlePlanterOpen, isOpen, handleDeletePlanter, handleRenamePlanter }) {
    const [inputValue, setInputValue] = useState(title); // track the input value for renaming titles
    const [inputDisabled, setInputDisabled] = useState(true); //track input state for renaming titles
    const inputRef = useRef(null);

    function openPlanter() {
        handlePlanterOpen(id, true);
    }
    function closePlanter() {
        handlePlanterOpen(id, false);
    }
    function deletePlanter() {
        handleDeletePlanter(id);
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const renamePlanter = (id, title) => {
        setInputDisabled(false);
        setTimeout(() => {
            inputRef.current.focus();
        }
        );
    };
    //handle enter key event to exit renaming
    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleRenamePlanter(id, inputValue);
            setInputDisabled(true);
        }
    };
    //handle click outside to exit renaming
    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            handleRenamePlanter(inputValue);
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

    return (
    <>
        <div className={isOpen ? "planter-button-div--open" : "planter-button-div"} onClick={isOpen ? closePlanter : openPlanter} >
            <button className={isOpen ? "open-planter--open" : "open-planter"} style={{ backgroundImage: `url(${smallLogo})` }}>
                <input
                    ref={inputRef}
                    className="rename-input"
                    placeholder={title}
                    disabled={inputDisabled}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    autoFocus={!inputDisabled} />
            </button>
            <button className="delete-planter" onClick={(e) => { e.stopPropagation(); deletePlanter(); }}>
                <img width="25" src={trashIcon} alt="Delete" />
            </button>
            <button className="rename-planter" onClick={(e) => { e.stopPropagation(); renamePlanter(); }}>
                <img width="25" src={editIcon} alt="Edit" />
            </button>
        </div>
    </>
    )
}
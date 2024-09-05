
import './GreenhouseButton.css'
import './animations.css'

//used in GreenhouseMenu
export default function GreenhouseButton({ ghId, title, handleGhOpen, isOpen, handleDeleteGh }) {
    function openGh() {
        handleGhOpen(ghId, true);
    }
    function closeGh() {
        handleGhOpen(ghId, false);
    }

    function renameGh() {


    }

    function deleteGh() {
        handleDeleteGh(ghId)
    }

    return (<>
        <div className="button-div" >
            <button className={isOpen ? "gh-button--open" : "gh-button"} onClick={isOpen ? closeGh : openGh}>{title}</button>
            <button className="delete" onClick={deleteGh}><img width="25" src="src/assets/trash.png"></img></button>
            <button className="rename"><img width="25" src="src/assets/edit.png"></img></button>
        </div>
    </>
    )
}
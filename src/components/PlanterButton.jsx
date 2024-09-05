import './PlanterButton.css';
import './animations.css'

//used in PlanterMenu
export default function PlanterButton({ id, title, handlePlanterOpen, isOpen, handleDeletePlanter }) {
    function openPlanter() {
        handlePlanterOpen(id, true);
    }
    function closePlanter() {
        handlePlanterOpen(id, false);
    }

    function deletePlanter() {
        handleDeletePlanter(id);
    }

    return (<>
        <div className={isOpen ? "planter-button-div--open" : "planter-button-div"} >
            <button className={isOpen ? "open-planter--open" : "open-planter"} onClick={isOpen ? closePlanter : openPlanter}>
                {title}</button>
            <button className="delete-planter" onClick={deletePlanter}> <img width="25" src="src/assets/trash-brown.png"></img></button>
            <button className="rename-planter"><img width="25" src="src/assets/edit-brown.png"></img></button>
        </div>
    </>
    )
}
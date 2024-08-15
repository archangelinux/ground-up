import './PlanterButton.css';


export default function PlanterButton({ id, title, handlePlanterOpen, isOpen }) {
    function openPlanter() {
        handlePlanterOpen(id, true);
    }
    function closePlanter() {
        handlePlanterOpen(id, false);
    }

    return (<>
        
    <button className="open-planter" onClick={isOpen ? closePlanter : openPlanter}>

            {title}</button>
        </>
    )
}
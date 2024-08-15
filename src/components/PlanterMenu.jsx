import PlanterButton from "./PlanterButton.jsx"
//import {Reorder, useDragControls} from "framer-motion"

export default function PlanterMenu({ planters, setPlanters, handlePlanterOpen }) {

    return (
        planters.map(planter => {
            return (<>
                <PlanterButton
                    {...planter}
                    key={planter.id}
                    id={planter.id}
                    title={planter.title}
                    handlePlanterOpen={handlePlanterOpen}
                />
            </>
            )
        })
    )
}
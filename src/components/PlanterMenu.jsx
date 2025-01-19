import PlanterButton from "./PlanterButton.jsx"

//used in Greenhouses
export default function PlanterMenu({ planters, handlePlanterOpen, handleDeletePlanter, handleRenamePlanter}) {
    return (
        planters.map(planter => {
            return (<>
                <PlanterButton
                    {...planter}
                    key={planter.id}
                    id={planter.id}
                    title={planter.title}
                    handlePlanterOpen={handlePlanterOpen}
                    handleDeletePlanter={handleDeletePlanter}
                    handleRenamePlanter={handleRenamePlanter}
                />
            </>
            )
        })
    )
}
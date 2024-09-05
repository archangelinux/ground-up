import Planter from "./Planter.jsx"

//used in Greenhouses
export default function PlanterList({ planters, handlePlanterOpen }) {
    return (
        planters.map(planter => {
            return (
                <Planter
                    {...planter}
                    key={planter.id}
                    title={planter.title}
                    startNum={planter.startNum}
                    planterId={planter.id}
                    handlePlanterOpen={handlePlanterOpen}
                />
            )
        })
    )
}
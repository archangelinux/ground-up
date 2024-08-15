import Planter from "./Planter.jsx"


export default function PlanterList({ planters, handlePlanterOpen }) {
    return (
        planters.map(planter => {
            return (
                <Planter
                    {...planter}
                    key={planter.id}
                    title={planter.title}
                    planterId={planter.id}
                    handlePlanterOpen={handlePlanterOpen}
                />
            )
        })
    )
}
import { useState } from "react"
import "./NewPlanterForm.css"


//used in Greenhouses
export default function NewPlanterForm({ onSubmit }) {
    const [planterName, setPlanterName] = useState("")
    const [startAt, setStartAt] = useState(1)

    function handleSubmit(e) {
        e.preventDefault()
        if (planterName === "") return
        onSubmit(planterName, parseInt(startAt))
        setPlanterName("") //resets input
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="new-planter-form">
                    <div className="form-row">
                        <input
                            value={planterName}
                            onChange={e => setPlanterName(e.target.value)}
                            type="text"
                            id="name-planter"
                            placeholder="New Problem Set"
                        />
                    </div>
                    <div className="form-row">
                        <label id="starting-num-label" htmlFor="starting-num">
                            Start at question #</label>
                        <input
                            value={startAt}
                            onChange={e => setStartAt(e.target.value)}
                            type="text"
                            id="starting-num"
                            placeholder="1"
                        />

                    </div>
                    <button className="new-planter">START NEW</button>
                </form>


            </div>
        </>
    )
}
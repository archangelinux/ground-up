import { useState } from "react"
import "./NewPlanterForm.css"

export default function NewPlanterForm({ onSubmit }) {
    const [planterName, setPlanterName] = useState("")
    const [startAt, setStartAt] = useState(1)

    function handleSubmit(e) {
        e.preventDefault()
        if (planterName === "") return
        onSubmit(planterName)
        setPlanterName("") //resets input
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="new-planter-form">
                    <div className="form-row">
                        <label id = "name-planter-label" htmlFor="name-planter">New Problem Set</label>
                        <input
                            value={planterName}
                            onChange={e => setPlanterName(e.target.value)}
                            type="text"
                            id="name-planter"
                            placeholder="Untitled"
                        />
                        <select id = "starting-num-label" htmlFor="starting-num">
                            <option value = "startAt">Start at question #</option>
                            <option value = "startRange">Start with a range</option>
                        </select>
                        <input 
                            value={startAt}
                            onChange={e => setStartAt(e.target.value)}
                            type="text"
                            id="starting-num"
                            placeholder= "1"
                        
                        />

                    </div>
                    <button className="new-planter">START NEW</button>
                </form>

               
            </div>
        </>
    )
}
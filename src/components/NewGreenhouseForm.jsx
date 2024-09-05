import './NewGreenhouseForm.css'
import { useState } from "react"

//used in Home
export default function NewGreenhouseForm({ onSubmit }) {

    const [ghName, setGhName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (ghName === "") return
        onSubmit(ghName)
        setGhName("") //resets input
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="new-gh-form">
                <input
                    value={ghName}
                    onChange={e => setGhName(e.target.value)}
                    type="text"
                    className="name-gh"
                    placeholder="New Greenhouse"
                />


                <button className="new-gh">CREATE</button>
            </form>

        </>
    )
}
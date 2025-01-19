import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './Greenhouse.css'
import PlanterList from './PlanterList.jsx';
import NewPlanterForm from "./NewPlanterForm.jsx";
import PlanterMenu from "./PlanterMenu.jsx";

export default function Greenhouse({ ghsId, title, isOpen, back }) {

    const [planters, setPlanters] = useState(() => {
        const localValue = localStorage.getItem("PLANTERS" + ghsId)
        if (localValue == null) return []
        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("PLANTERS" + ghsId, JSON.stringify(planters))
    }, [planters])

    function newPlanter(title, startNum) {
        setPlanters(currentPlanters => {
            return [{
                id: crypto.randomUUID(), title: title, isOpen: false, startNum: startNum
            }, ...currentPlanters]
        })
    }

    function handlePlanterOpen(id, isOpen) {
        setPlanters(currentPlanters => {
            return currentPlanters.map(planter => {
                if (planter.id === id) {
                    return { ...planter, isOpen: isOpen }
                } else {
                    //ensure only one planter open at a time
                    if (isOpen) {
                        return { ...planter, isOpen: false }
                    }
                    else {
                        return { ...planter }
                    }
                }
            })
        })
    }

    function handleRenamePlanter(id, title) {
        setPlanters(currentPlanters => {
            return currentPlanters.map(planter => {
                if (planter.id === id) {
                    return { ...planter, title: title }
                } else {
                    return { ...planter }
                }
            })
        })
    }

    function handleDeletePlanter(id) {
        setPlanters(currentPlanters => {
            return currentPlanters.filter(planter => planter.id !== id)
        })
    }

    return (
        <div className={isOpen ? "container" : "container--hidden"}>
            <div className="greenhouse">
                <button className="back" onClick={back}>⬅</button>
                <h1>{title}</h1>
                <NewPlanterForm onSubmit={newPlanter} />
                <div id="garden">
                    <PlanterMenu planters={planters} handlePlanterOpen={handlePlanterOpen} handleDeletePlanter={handleDeletePlanter} handleRenamePlanter={handleRenamePlanter} />
                </div>
            </div>
            <PlanterList planters={planters} handlePlanterOpen={handlePlanterOpen} handleRenamePlanter={handleRenamePlanter} />
        </div>

    )
}


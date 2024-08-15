import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Planter from './components/Planter.jsx';
import PlanterList from './components/PlanterList.jsx';
import NewPlanterForm from "./components/NewPlanterForm.jsx";
import PlanterMenu from "./components/PlanterMenu.jsx";




export default function App() {

  const [planters, setPlanters] = useState(() => {
    const localValue = localStorage.getItem("PLANTERS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("PLANTERS", JSON.stringify(planters))
  }, [planters])

  function newPlanter(title) {
    setPlanters(currentPlanters => {
      return [...currentPlanters, {
        id: crypto.randomUUID(), title: title, isOpen: false
      }]
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

  return (
    <>
      <div className="greenhouse">
        <NewPlanterForm onSubmit={newPlanter} />
        <div id="garden">
          <PlanterMenu planters={planters} handlePlanterOpen={handlePlanterOpen}  />
        </div>
      </div>
  
      <PlanterList planters={planters} setPlanters = {setPlanters} handlePlanterOpen={handlePlanterOpen} />
    </>)
}


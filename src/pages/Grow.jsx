import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import NewGreenhouseForm from '../components/NewGreenhouseForm.jsx'
import GreenhouseMenu from '../components/GreenhouseMenu.jsx'
import GreenhouseList from '../components/GreenhouseList.jsx'
import './Home.css'


export function Grow() {
    const navigate = useNavigate();

    function back() {
        setHomepageOpen(true)
        setGhs(currentGh => {
            return currentGh.map(gh => {
                return { ...gh, isOpen: false }

            })
        })
    }

    return (
        <>
            <GreenhouseList ghs={ghs} handleGhOpen={handleGhOpen} back={back} handleRenameGh={handleRenameGh} />
        </>
    )
}
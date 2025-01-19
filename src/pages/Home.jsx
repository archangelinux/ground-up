import { useState } from 'react'
import { useEffect } from 'react'
import NewGreenhouseForm from '../components/NewGreenhouseForm.jsx'
import GreenhouseMenu from '../components/GreenhouseMenu.jsx'
import GreenhouseList from '../components/GreenhouseList.jsx'
import './Home.css'
import bigLogo from '../assets/bigLogo.png';



export function Home() {
    const [homepageOpen, setHomepageOpen] = useState(() => {
        const localValue = localStorage.getItem("HP-OPEN")
        if (localValue == null) return (true)
        return JSON.parse(localValue)
    });

    useEffect(() => {
        localStorage.setItem("HP-OPEN", JSON.stringify(homepageOpen))
    }, [homepageOpen])

    const [numGh, setNumGh] = useState(() => {
        const localValue = localStorage.getItem("NUM-GH")
        if (localValue == null) return (1)
        return JSON.parse(localValue)
    });

    useEffect(() => {
        localStorage.setItem("NUM-GH", JSON.stringify(numGh))
    }, [numGh])

    const [ghs, setGhs] = useState(() => {
        const localValue = localStorage.getItem("GREENHOUSES")
        if (localValue == null) return []
        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("GREENHOUSES", JSON.stringify(ghs))
    }, [ghs])

    const [inputDisabled, setInputDisabled] = useState(true)

    function newGreenhouse(title) {
        setGhs(currentGhs => {
            return [{
                ghId: numGh, title: title, isOpen: false
            }, ...currentGhs]
        })
        setNumGh(numGh + 1)
    }

    function handleGhOpen(id, isOpen) {
        setGhs(currentGh => {
            return currentGh.map(gh => {
                if (gh.ghId === id) {
                    return { ...gh, isOpen: isOpen }
                } else {
                    //ensure only one open at a time
                    if (isOpen) {
                        return { ...gh, isOpen: false }
                    }
                    else {
                        return { ...gh }
                    }
                }
            })
        })
        setHomepageOpen(!isOpen)
    }

    function handleDeleteGh(ghId) {
        setGhs(currentGhs => {
            return currentGhs.filter(gh => gh.ghId != ghId);
        })
    }
    function handleRenameGh(ghId, title) {
        setGhs(currentGhs => {
            return currentGhs.map(gh => {
                if (gh.ghId === ghId) {
                    return { ...gh, title: title }
                } else {
                    return { ...gh }
                }
            })
        })
    }

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
            <div className={homepageOpen ? "homepage" : "homepage--hidden"}>
                <img id="big-logo" src={bigLogo} alt="Big Logo" />
                <div className = "banner-form">
                    <h5>on the grind? plant some joy.</h5>
                    <NewGreenhouseForm id="gh-form" onSubmit={newGreenhouse} />
                </div>
                <div className="menu">
                    <GreenhouseMenu ghs={ghs} handleGhOpen={handleGhOpen} handleDeleteGh={handleDeleteGh} inputDisabled = {inputDisabled} setInputDisabled = {setInputDisabled} />
                </div>
            </div>
            <GreenhouseList ghs={ghs} handleGhOpen={handleGhOpen} back={back} />
        </>
    )
}
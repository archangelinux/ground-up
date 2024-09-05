import Greenhouse from "../pages/Greenhouse.jsx"

//used in App
export default function GreenhouseList({ ghs, handleGhOpen, back }) {
    
    if(ghs.length == 0){
        return(<img className = "gh-placeholder" src = "src/assets/greenhouse-placeholder.png"></img>)
    }
    
    return (
        ghs.map(gh => {
            return (
                
                <Greenhouse
                    {...gh}
                    key={gh.ghId}
                    title={gh.title}
                    ghsId={gh.ghId}
                    handleGhOpen={handleGhOpen}
                    back={back} />

            )
        })
    )
}
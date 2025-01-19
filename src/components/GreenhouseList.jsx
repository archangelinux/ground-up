import Greenhouse from "./Greenhouse.jsx";
import ghplaceholder from '../assets/greenhouse-placeholder.png';
//used in App
export default function GreenhouseList({ ghs, handleGhOpen, handleRenameGh, back }) {
    
    if(ghs.length == 0){
        return(<img className = "gh-placeholder" src = {ghplaceholder} ></img>)
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
                    handleRenameGh={handleRenameGh}
                    back={back} />
            )
        })
    )
}
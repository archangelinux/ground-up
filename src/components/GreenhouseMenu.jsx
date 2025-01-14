import GreenhouseButton from "./GreenhouseButton.jsx"

//used in Home
export default function GreenhouseMenu({ ghs, handleGhOpen, handleDeleteGh, inputDisabled, setInputDisabled }) {

    return (
        ghs.map(gh => {
            return (<>
                <GreenhouseButton
                    {...gh}
                    key={gh.ghId}
                    ghId={gh.ghId}
                    title={gh.title}
                    handleGhOpen={handleGhOpen}
                    handleDeleteGh={handleDeleteGh}
                    inputDisabled = {inputDisabled}
                    setInputDisabled = {setInputDisabled}
                />
            </>
            )
        })
    )
}
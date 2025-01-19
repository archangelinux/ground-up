import GreenhouseButton from "./GreenhouseButton.jsx"

//used in Home
export default function GreenhouseMenu({ ghs, handleGhOpen, handleDeleteGh, inputDisabled, setInputDisabled, handleRenameGh }) {

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
                    handleRenameGh={handleRenameGh}
                    inputDisabled = {inputDisabled}
                    setInputDisabled = {setInputDisabled}
                />
            </>
            )
        })
    )
}
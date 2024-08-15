import './Planter.css'

export default function RightLeaf({ num, isOpen, isFlagged, isSnipped, handleLeafOpen }) {
    const openLeaf = function () {
        handleLeafOpen(num, true);
    }
    const closeLeaf = function () {
        handleLeafOpen(num, false);
    }

    return <>
        <div onClick={isOpen ? closeLeaf : openLeaf} className={`${(isOpen) ? "open-right-leaf" : "right-leaf"} ${(isSnipped) ? "snipped-right-leaf" : "right-leaf"}`}>
            <div className={`${(isFlagged) ? "flagged-right-leaf-num" : "right-leaf-num"} ${(isSnipped) ? "snipped-leaf-num" : "right-leaf-num"}`}
            >{num}</div></div>
    </>


}
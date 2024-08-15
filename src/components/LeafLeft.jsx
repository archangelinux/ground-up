import './Planter.css'

export default function LeafLeft({ num, isOpen, isFlagged, isSnipped, handleLeafOpen }) {
    const openLeaf = function () {
        handleLeafOpen(num, true);
    }
    const closeLeaf = function () {
        handleLeafOpen(num, false);
    }

    return <>
        <div onClick={isOpen ? closeLeaf : openLeaf} className={`${(isOpen) ? "open-left-leaf" : "left-leaf"} ${(isSnipped) ? "snipped-left-leaf" : "left-leaf"}`}>
            <div className={`${(isFlagged) ? "flagged-left-leaf-num" : "left-leaf-num"} ${(isSnipped) ? "snipped-leaf-num" : "left-leaf-num"}`}
            >{num}</div></div>
    </>

}


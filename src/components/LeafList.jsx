import LeafLeft from "./LeafLeft.jsx"
import LeafRight from "./LeafRight.jsx"


export default function LeafList({ leaves, handleLeafOpen, handleLeafSnipped, handleLeafFlagged }) {
    return (
        leaves.map(leaf => {
            if ((leaf.id) % 2 == 1) {
                return (
                    <LeafLeft
                        {...leaf}
                        key={leaf.id}
                        num={leaf.id}
                        handleLeafOpen={handleLeafOpen}
                        handleLeafSnipped={handleLeafSnipped}
                        handleLeafFlagged={handleLeafFlagged} />
                )
            } else {
                return (
                    <LeafRight
                        {...leaf}
                        key={leaf.id}
                        num={leaf.id}
                        handleLeafOpen={handleLeafOpen}
                        handleLeafSnipped={handleLeafSnipped}
                        handleLeafFlagged={handleLeafFlagged} />
                )
            }
        })
    )
}
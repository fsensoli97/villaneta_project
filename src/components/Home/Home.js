import "./Home.css"
import Timer from "../Timer/Timer"

export default function Home() {
    return (
        <>
            <div className="titleContainer">
                <div className="mainTitle">
                    Villaneta project
                </div>
                <div className="subtitle">
                    Join our community
                </div>
            </div>
            <Timer></Timer>
        </>
    )
} 
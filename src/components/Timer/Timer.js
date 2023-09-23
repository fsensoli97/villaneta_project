import { useEffect, useState } from "react"
import './Timer.css'

export default function Timer({timerText, dueDate}) {
    const [timer, setTimer] = useState([0, 0, 0, 0]);

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const partyTime = new Date(dueDate);
            const totSeconds =  parseInt(Math.abs(partyTime - now) / 1000);

            const days = Math.floor(totSeconds / (24 * 3600));
            const hours = Math.floor((totSeconds - (days * 24 * 3600)) / 3600);
            const minutes = Math.floor((totSeconds - (days * 24 * 3600) - (hours * 3600)) / 60);
            const seconds = Math.floor(totSeconds - (days * 24 * 3600) - (hours * 3600) - (minutes * 60));

            setTimer([days, hours, minutes, seconds]);
        }, 1000);
    }, [dueDate]);

    return (
        <>    
            <div className="timerContainer">
                <div className="timerTitle">{timerText}</div>
                <div>
                    { String(timer[0]).padStart(2, '0') + "d " } 
                    { String(timer[1]).padStart(2, '0') + "h "} 
                    { String(timer[2]).padStart(2, '0') + "m "} 
                    { String(timer[3]).padStart(2, '0') + "s "} 
                </div>
            </div>
        </>
    )
}
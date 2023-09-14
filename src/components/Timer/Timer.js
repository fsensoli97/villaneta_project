import { useEffect, useState } from "react"
import './Timer.css'

export default function Timer() {
    /* 
    array dove la prima é la variabile di stato (dinamica) e la seconda é la funzione per aggiornarla. Use state -> valore iniziale 
    mesi, giorni, min, sec
    */
    const [timer, setTimer] = useState([0, 0, 0, 0]);

    function calculateRemainingTime () {
        const now = new Date();
        const partyTime = new Date('11/04/2023');
        const totSeconds =  parseInt(Math.abs(partyTime - now) / 1000);

        const days = Math.floor(totSeconds / (24 * 3600));
        const hours = Math.floor((totSeconds - (days * 24 * 3600)) / 3600);
        const minutes = Math.floor((totSeconds - (days * 24 * 3600) - (hours * 3600)) / 60);
        const seconds = Math.floor(totSeconds - (days * 24 * 3600) - (hours * 3600) - (minutes * 60));

        setTimer([days, hours, minutes, seconds]); 
    }

    useEffect(() => {
        /*setInterval prende due parametri (una funzione (arrow function in questo caso, che calcola il tempo mancante) 
        e ogni quanto eseguirla (in millisecondi))
        */

        setInterval(calculateRemainingTime, 1000);
    }, []);

    return (
        <>    
            <div className="timerContainer">
                <div className="timerTitle">Next event starts in:</div>
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
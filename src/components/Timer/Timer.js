import { useEffect, useState } from "react"

export default function Timer() {
    let [timer, setTimer] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTimer(timer + 1)
        }, 1000)
    })
       
    /*
    const currentdate = new Date(); 
    const day = currentdate.getDate()
    const month = currentdate.getMonth()
    const year = currentdate.getFullYear()
    const hours = currentdate.getHours()
    const minutes = currentdate.getMinutes()
    const seconds = currentdate.getSeconds()

    const partyDay = 4
    const partyMonth = 11
    const partyYear = 2023
    const partyHours = 0
    const partyMinutes = 0
    const partySeconds = 0
    */
    const date1 = new Date();
    const date2 = new Date('11/04/2023');
    const diffTime = parseInt(Math.abs(date2 - date1));
    const diffSecs = parseInt(diffTime / 1000);
    const secs = diffSecs % 60;
    const diffMinutes = parseInt(diffSecs / 60);
    const minutes = diffMinutes % 60;
    const diffHours = parseInt(diffMinutes / 60);
    const hours = diffMinutes % 24;
    const days = parseInt(diffHours / 24);

    console.log(days + ':' + hours + ':' + minutes + ':' + secs)

    return (
        <>
            <div>{ timer }</div>
        </>
    )
}
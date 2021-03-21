import { useState } from "react"
import { ChildTimerPractice } from "./childTimerPractice"

export const ParentTimer = () => {

    const [miliseconds, setmiliseconds] = useState(1000)
    return (
        <div>
            <span> Milisegundos {miliseconds} </span>
            <br />
            <button onClick={() => setmiliseconds(1000)} >
                1000
            </button>
            <button onClick={() => setmiliseconds(2000)} >
                2000
            </button>
            <button onClick={() => setmiliseconds(3000)} >
                3000
            </button>
            <ChildTimerPractice miliseconds={miliseconds} />
        </div>
    )
}

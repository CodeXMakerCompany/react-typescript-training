import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    miliseconds: number
}

export const ChildTimerPractice = ({ miliseconds }: TimerArgs) => {


    const [seconds, setSeconds] = useState(0)
    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {
        console.log('useEffect');
        //Mini if
        ref.current && clearInterval(ref.current)

        ref.current = setInterval(() => setSeconds(s => s + 1), miliseconds)

        // return () => {
        //     console.log('??? break component');

        // }
    }, [miliseconds])

    return (
        <div>
            <h4> Timer: <small> {seconds} </small> </h4>
        </div>
    )
}

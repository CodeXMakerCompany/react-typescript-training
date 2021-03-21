import { makeStyles } from "@material-ui/core";
import { useState } from "react"

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

export const CounterPractice = () => {
    const classes = useStyles();

    let [counter, setCounter] = useState(0)

    const add = (number: number = 1): void => {

        setCounter(counter + number)
    }


    return (
        <div>

            <h3> Counter: useState </h3>
            <button onClick={() => add(1)} className={classes.root}>
                + ❄️
            </button>
            <button onClick={() => add(2)} className={classes.root}>
                + ❄️❄️
            </button>
            <button onClick={() => setCounter(0)} className={classes.root}>
                Reset
            </button>
            {[...Array(counter)].map((x =>
                <div>❄️</div>

            ))}


        </div>
    )
}

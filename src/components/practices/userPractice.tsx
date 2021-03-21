import { useState } from 'react'

import { makeStyles } from "@material-ui/core";

interface User {
    id: string,
    name: string
}
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

export const UserPractice = () => {
    const classes = useStyles();
    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            id: '782as4ds',
            name: 'Samuel Vazquez Ruiz'
        })
    }
    return (
        <div>
            <div>Usuario :</div>

            <button onClick={() => (login())} className={classes.root}>
                Login
            </button>

            {
                (!user)
                    ? <pre> No hay usuario. </pre>
                    : <pre> {JSON.stringify(user)} </pre>
            }
        </div>
    )
}

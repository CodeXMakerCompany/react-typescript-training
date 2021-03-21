import { useReducer } from "react";

const initialState = {
    counter: 0
}

type ActionType =
    { type: 'add' } |
    { type: 'less' } |
    { type: 'custom', payload: number }

const counterReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'add':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'less':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'custom':
            return {
                ...state,
                counter: action.payload
            }

        default:
            return state;
    }
}

export const ReducerCounter = () => {

    const [counterState, dispatch] = useReducer(counterReducer, initialState)

    return (
        <div>
            contador : { counterState.counter}
            <button onClick={() => dispatch({ type: 'add' })}>
                + 1
            </button>
            <button onClick={() => dispatch({ type: 'less' })}>
                - 1
            </button>
            <button onClick={() => dispatch({ type: 'custom', payload: 100 })}>
                100
            </button>
        </div>
    )
}

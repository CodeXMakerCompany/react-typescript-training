/*eslint-disable */
import { useContext } from "react"
import { DataContext } from "./DataContext"

const data = {
    nombre: 'Yaz',
    edad: 21
}
export const ButtonChangeData = () => {

    let context: any = {} = useContext(DataContext)
    //console.log(data);

    return (
        <div>
            <button onClick={() => context.setData(data)}>
                Cambiar Data
            </button>
        </div>
    )
}

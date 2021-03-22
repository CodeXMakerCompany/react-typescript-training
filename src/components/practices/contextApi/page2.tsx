/*eslint-disable */
import { useContext } from "react"
import { DataContext } from "./DataContext"

export const Page2 = () => {
    let context: any = {} = useContext(DataContext)

    return (
        <div>
            pagina 2
            <pre>
                {context ? JSON.stringify(context.data, null, 2) : 'nothing'}

            </pre>
        </div>
    )
}

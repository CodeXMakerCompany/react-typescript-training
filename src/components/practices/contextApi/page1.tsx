/*eslint-disable */
import { useContext } from "react";
import { ButtonChangeData } from "./buttonChangeData";
import { DataContext } from "./DataContext";

export const Page1 = () => {

    let context: any = {} = useContext(DataContext)

    return (
        <div>
            pagina 1
            <pre>
                {context ? JSON.stringify(context.data, null, 2) : 'nothing'}
                <ButtonChangeData />
            </pre>
        </div>
    )
}

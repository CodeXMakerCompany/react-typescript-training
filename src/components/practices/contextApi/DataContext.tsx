import React, { ReactNode, useState } from 'react';

export const DataContext = React.createContext({});

export type Props = {
    children: ReactNode;
}


const dataFixed = {
    name: 'Codexmaker',
    edad: 25
}


export const DataProvider = (props: Props) => {
    const { children } = props
    const [data, setData] = useState(dataFixed)
    return (
        <DataContext.Provider value={{ data, setData }}>
            { children}
        </DataContext.Provider>
    )
}


import React, { useState } from 'react';

export const DropdownContext = React.createContext();

export const DropdownProvider = ({children}) => {
    const [display, setDisplay] = useState('Overall');

    return (
        <DropdownContext.Provider value={{display, setDisplay}}>
            {children}
        </DropdownContext.Provider>
    )
}
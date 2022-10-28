import React, { useState } from 'react';

export const DropdownContext = React.createContext();

export const DropdownProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [display, setDisplay] = useState('default');

    return (
        <DropdownContext.Provider value={{open, setOpen, display, setDisplay}}>
            {children}
        </DropdownContext.Provider>
    )
}
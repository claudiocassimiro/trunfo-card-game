import React from 'react';
import AppContext from './AppContext';

const ProviderContext = ({ children}) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
};

import {createContext, useContext} from 'react';

const mcrContext=createContext();

const MCRProvider=({children})=>{

    return(
        <mcrContext.Provider>
            {children}
        </mcrContext.Provider>
    )
};
const useMCR=()=>useContext(mcrContext);
export {useMCR,MCRProvider}
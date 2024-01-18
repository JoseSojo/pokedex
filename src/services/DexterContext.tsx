import { createContext, useContext, useState, FC } from 'react';
import { DexterContext as DexterConterInterface, GlobalPkmn, PropsProvider } from '../types/DexterTypes';

const URL = `https://pokeapi.co/api/v2/pokemon`;

const DefultContext: DexterConterInterface = {
    pag: 0,
    setPag: ()=>{},
    results: [],
    setResult: ()=>{},
    url: '',
    setUrl: ()=>{},
    limit: 0,
    setLimit: ()=>{}
}

export const DexterContext = createContext(DefultContext);

export const DexterProvider: FC<PropsProvider> = ({ children }) => {
    const [pag, setPag] = useState(0);
    const [limit, setLimit] = useState(50);
    const [url, setUrl] = useState(`${URL}?limit=${limit}&offset=${limit*pag}`);
    const [results, setResult] = useState<GlobalPkmn[]>([]);

    return (
        <DexterContext.Provider value={{
            pag,
            setPag,
            results,
            setResult,
            url,
            setUrl,
            limit,
            setLimit
        }}>
            {children}
        </DexterContext.Provider>
    )
}

export const useDexter = () => useContext(DexterContext);

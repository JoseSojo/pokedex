import { Dispatch, ReactNode, SetStateAction } from "react";

export interface PropsProvider {
    children: ReactNode
}

export type PkmnResult = {
    name: string,
    url: string,
}

export interface ResultFetch {
    count: number,
    next: string,
    previous: string | null,
    results: PkmnResult[];
}

export interface GlobalPkmn {
    name: string,
    sprites: {
        front_default: string
    },
    types: { slot:number, type: {name:string, url:string} }[]
}

export interface DexterContext {
    pag: number,
    setPag: Dispatch<SetStateAction<number>>,
    url: string,
    setUrl: Dispatch<SetStateAction<string>>,
    limit: number,
    setLimit: Dispatch<SetStateAction<number>>,
    results: GlobalPkmn[],
    setResult: Dispatch<SetStateAction<GlobalPkmn[]>>,
}


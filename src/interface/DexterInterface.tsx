export interface POKEMON {
    name:string,
    url:string,
    img:string
}

export interface PKMN_LIMIT_OFFSET {
    count:number,
    next:string,
    previous: string | null,
    results: POKEMON[]
}

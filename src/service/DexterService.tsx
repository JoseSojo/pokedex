import { PKMN_LIMIT_OFFSET } from "../interface/DexterInterface";

class Dexter {

    GetUrl() {
        return 'https://pokeapi.co/api/v2/pokemon/'
    }

    GenerateUrl({pag}: {pag:number}) {
        let URL = this.GetUrl();
        const limit = 6;
        const offset = pag === 0 ? 0 : pag+6;
        const query = `limit=${limit}&offset=${offset}`;
        URL += `?${query}`;
        return URL;
    }

    async GetPokemon({url}:{url:string}) {
        try {
            const result = await fetch(url);
            if(!result.ok) {
                return {error:true, msg:'Error en la url', pkmn:null}
            }
            const jsonPkmn = await result.json() as PKMN_LIMIT_OFFSET;
            return {error:false, msg:null, pkmn:jsonPkmn}

        } catch (error) {

            return {error:true, msg:'Error en la url', pkmn:null}
        }
    }

    async GetOnePkmn({id}: {id: string}) {
        try {
            const urlOne = `${this.GetUrl()}${id}`
            const result = await fetch(urlOne);
            if(!result.ok) {
                return {error:true, msg:'Error en la urlOne', pkmn:null}
            }
            const jsonPkmn = await result.json();
            console.log(jsonPkmn);
            return false; //{error:false, msg:null, pkmn:jsonPkmn}

        } catch (error) {

            return {error:true, msg:'Error en la url', pkmn:null}
        }
    }

}

const dexter = new Dexter();

export default dexter;

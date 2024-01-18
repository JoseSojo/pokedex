import axios from 'axios';
import { GlobalPkmn } from '../types/DexterTypes';

type KeyColors = 'ice'|'ghost'|'dragon' | 'dark' | 'grass' | 'poison' | 'fire' | 'flying' | 'water' | 'bug' | 'normal' | 'electric' | 'ground' | 'fighting' | 'fairy' | 'rock' | 'psychic' | 'steel'; 

const ColorTypes = {ice:'#72B8FF',ghost:'#8E02B0',dragon:'#002CD0',dark:'#17011D',grass:'#05B926',poison:'#AA09DA',fire:'#ef7252',flying:'#23A6FF',water:'#0079B9',bug:'#00FE6F',normal:'#EEEEEE',electric:'#FCFC06',ground:'#CAAD07',fairy:'#F53FEF',rock:'#BAA793',fighting:'#E81165',psychic:'#FF75E0',steel:'#C2C2C2'}

class Dexter {

    async GetPokemonPagination({ url }:{ url:string }) {
        const result = await axios.get(url);
        console.log(result);
        return result;
    }

    async GetOnePkmn({ name }: { name:string }): Promise<GlobalPkmn> {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const pk = await axios.get(URL);
        const result = pk.data as GlobalPkmn;
        return result        
    }
    
    GetColorKey({ key1 }: { key1:string }): string {
        const gk1 = key1 as KeyColors;

        if(gk1 == 'bug') { return ColorTypes.bug; }
        else if(gk1 == 'electric') { return ColorTypes.electric; }
        else if(gk1 == 'fire') { return ColorTypes.fire; }
        else if(gk1 == 'flying') { return ColorTypes.flying; }
        else if(gk1 == 'grass') { return ColorTypes.grass; }
        else if(gk1 == 'ground') { return ColorTypes.ground; }
        else if(gk1 == 'normal') { return ColorTypes.normal; }
        else if(gk1 == 'poison') { return ColorTypes.poison; }
        else if(gk1 == 'water') { return ColorTypes.water; }
        else if(gk1 == 'fairy') { return ColorTypes.fairy; }
        else if(gk1 == 'psychic') { return ColorTypes.psychic; }
        else if(gk1 == 'fighting') { return ColorTypes.fighting; }
        else if(gk1 == 'rock') { return ColorTypes.rock; }
        else if(gk1 == 'dark') { return ColorTypes.dark; }
        else if(gk1 == 'dragon') { return ColorTypes.dragon; }
        else if(gk1 == 'ghost') { return ColorTypes.ghost; }
        else if(gk1 == 'ice') { return ColorTypes.ice; }
        else { return ColorTypes.steel; }
    }
}

export default Dexter;

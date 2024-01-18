import { FC } from "react";
import DEXTER from '../../services/DexterLogic';
import { GlobalPkmn } from "../../types/DexterTypes";
import './card.style.css';

const Dexter = new DEXTER();

type ColorBG = 
    | { backgroundColor: string }
    | { backgroundImage: string }

interface Props {
    pokemon: GlobalPkmn
}

export const CardPokemon: FC<Props> = ({ pokemon }) => {

    let color2 = '';
    let color1 = Dexter.GetColorKey({ key1: pokemon.types[0].type.name });
    let colorbg: ColorBG = { backgroundColor: color1 }
    if(pokemon.types[1]) {
        color2 = Dexter.GetColorKey({ key1: pokemon.types[1].type.name });
        colorbg = { backgroundImage: `linear-gradient(${color1}, ${color2})` }
        if(pokemon.name == 'aggron') { console.log(colorbg) }
    }

    return (
        <aside className='card-pokemon'>
            <div 
                className='container-img'
                style={colorbg}
            >
                <img src={pokemon.sprites.front_default} />
            </div>
            <h4>{pokemon.name}</h4>  
            <div className='container-types'>
                <span style={{ background: color1 }} >{pokemon.types[0].type.name}</span>
                { pokemon.types[1] && <span style={{ background: color2 }} >{pokemon.types[1].type.name}</span>}
            </div>          
        </aside>
    )
}

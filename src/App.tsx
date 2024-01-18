import { CardPokemon } from "./components/CardPokemon.tsx/CardPokemon";
import { useDexter } from "./services/DexterContext"
import './App.css';
import { useEffect, useState } from "react";
import DEXTER from './services/DexterLogic';
import { ResultFetch } from "./types/DexterTypes";


const DexterService = new DEXTER();


function App() {
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  const Dexter = useDexter();

  useEffect(() => {
    setLoad(true);
    setError(false);

    try {
      const GettingPkmn = async () => {
        
        const resultAxios = await DexterService.GetPokemonPagination({ url: Dexter.url });
        if(resultAxios.status !== 200) {
            setError(true);
            return;
        }
        const PkmnGeneric = resultAxios.data as ResultFetch;
        Dexter.setUrl(PkmnGeneric.next);
        const PokemonList = Dexter.results;
        PkmnGeneric.results.map(async (pk) => {
            const pokemon = await DexterService.GetOnePkmn({ name:pk.name });
            PokemonList.push(pokemon);
        });
        Dexter.setResult(PokemonList);
        setLoad(false);
        setError(false);
      }
    GettingPkmn();
    } catch (error) {
      setError(true);
    }
},[Dexter.pag]);

  return (
    <>
      <header className='header'>
        <h1>Dexter</h1>
        <span>{50+(Dexter.pag*Dexter.limit)} / 1302</span>
      </header> 

      <main>
        {
          Dexter.results &&
          <>
            <section className='container-pokemon'>
              {
                Dexter.results.map((pk) => <CardPokemon key={pk.name} pokemon={pk} />)
              }
            </section>
            {
              load === false &&
              <section className='section-get-more'>
                <button onClick={()=>Dexter.setPag(Dexter.pag+1)} >Obtener más</button>
              </section>
            }
          </>
        }
        {
          load === true &&
          error === false &&
          <section>
            Cargando...
          </section>
        }
        {
          error === true &&
          <section>
            Hubo un error inesperado
          </section>
        }
      </main>
    </>
  )
}

export default App

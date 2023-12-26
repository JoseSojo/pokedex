import { useEffect, useState } from 'react';
import './App.css';
import DexterService from './service/DexterService';
import { POKEMON } from './interface/DexterInterface';

function App() {
  const [pag, setPag] = useState(0);
  const [list, setList] = useState<POKEMON[] | null>(null);
  const [url, setUrl] = useState(DexterService.GenerateUrl({ pag }));
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(false);
 
  useEffect(() => {
    setLoad(true);

    const Get = async () => {
      const result = await DexterService.GetPokemon({url})
      if(result.error) return setErr(true);
      if(result.pkmn === null) return setErr(true);

      const resultPokemon = result.pkmn;
      setUrl(resultPokemon.next);

      const NewPkm = [] as POKEMON[];

      resultPokemon.results.map(async (pk, i) => {
        const pkm = await fetch(`${DexterService.GetUrl()}${pk.name}`);
        const jsonPkm = await pkm.json();
        NewPkm.push({...pk,img: jsonPkm.sprites.front_default})
        if (i == resultPokemon.results.length-1) {
          setList(NewPkm); 
          setLoad(false);   
        }           
      })

     
    }

    Get();
  }, [pag]);

  return (
    <>
      <p>Pagina: {pag}</p>
      
      {
        err == true
        ? <span>Error</span>
        : <>
          { 
            load === true
            ? <span>cargando...</span> 
            : <button onClick={ ()=>setPag(pag+1) }>OPTENER MÁS</button>
          }
        </>
      }
      {
        list !== null && list.map((item) => (
          <div key={item.url} className=''>
            <img src={item.img} />
            {item.name}
          </div>
        ))
      }
    </>
  )
}

export default App

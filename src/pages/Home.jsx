import Paragraph from "../components/paragraph"
import { useState, useEffect } from 'react'
import './Home.css'

function Home({ search, setPage }) {
  //const [search, setSearch] = useState("")
  //const [text, setText] = useState("")
  const [music, setMusic] = useState({lyrics : [{text : "", singer : ""}]})

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (search !== "") {
      setLoading(true);

      carregarPagina(search, setMusic)
      .finally(() => {
        setLoading(false);
      });
    }
  }, [search]);

  if(search == ""){
    return(
      <>
        <button onClick={() => setPage("list")}>Selecionar Música</button>
      </>
    )
  }
  //carregarPagina(search, setMusic);
  return (
    <>
        

        <button onClick={() => setPage("list")}>Selecionar Música</button>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          music.lyrics.map((paragraph, index) => (
            <Paragraph
              key={index}
              text={paragraph.text} 
              singer={paragraph.singer}
            />
          ))
        )}
    </>
  )
}

async function carregarPagina(nomeMusica, setFunction) {
    const musicas = import.meta.glob("../data/*.json");

    const caminho = `../data/${nomeMusica}.json`;

    if (!musicas[caminho]) {
        console.error("Música não encontrada:", caminho);
        return;
    }

    //await new Promise(resolve => setTimeout(resolve, 2000));

    const modulo = await musicas[caminho]();
    setFunction(modulo.default);
}




export default Home;
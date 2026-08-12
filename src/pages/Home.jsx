import Paragraph from "../components/paragraph"
import { useState } from 'react'

function Home({ search, setPage }) {
  //const [search, setSearch] = useState("")
  //const [text, setText] = useState("")
  const [music, setMusic] = useState({lyrics : [{text : "", singer : ""}]})
  
  if(search == ""){
    return(
      <>
        <button onClick={() => setPage("list")}>Buscar</button>
      </>
    )
  }
  carregarPagina(search, setMusic);
  return (
    <>
        

        <button onClick={() => setPage("list")}>Buscar</button>
        {music.lyrics.map((paragraph, index) => (
          <Paragraph
            key={index}
            text={paragraph.text} 
            singer={paragraph.singer}
           />
        ))}
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

    const modulo = await musicas[caminho]();
    setFunction(modulo.default);
}




export default Home;
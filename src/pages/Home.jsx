import Paragraph from "../components/paragraph"
import { useState } from 'react'

function Home({ chosenMusic }) {
  const [search, setSearch] = useState("")
  //const [text, setText] = useState("")
  const [music, setMusic] = useState({lyrics : [{text : "", singer : ""}]})

  
  
  return (
    <>
        <input
            type="text"
            placeholder="Digite o nome da música"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => carregarPagina(search, setMusic)}>Buscar</button>
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
    const caminho = `${import.meta.env.BASE_URL}/musics/${nomeMusica}.json`;

    const response = await fetch(caminho);

    const texto = await response.json();

    setFunction(texto);
}

async function getFileNames(){
  const arquivos = import.meta.glob("./data/*.json");
  const lista = Object.keys(arquivos).map(caminho => ({
    caminho: caminho,
    nome: caminho.split("/").pop().replace(".json", "")
  }));
  return lista;
}


export default Home;
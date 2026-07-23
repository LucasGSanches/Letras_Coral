import { useState } from 'react'
import './App.css'
import Paragraph from "./components/paragraph"

function App() {
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
        {music.lyrics.map(paragraph => (
          <Paragraph
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

    console.log(texto);
    setFunction(texto);
}

export default App;

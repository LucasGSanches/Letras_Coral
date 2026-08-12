import { useState } from 'react'
import TitleMusic from "../components/titleMusic"

function List({getMusic}){
    const [search, setSearch] = useState("");
    //const [titles, setTitles] = useState([]);
    //setTitles(getFileNames());
    const titles = getFileNames()
    return(
        <>
            <input
                type="text"
                placeholder="Digite o nome da música"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            
            {titles.map((title) => (
                <TitleMusic
                    key={title.root}
                    func={() => getMusic(title.name)}
                    name={title.name}
                />
            ))}

        </>
    )
}

function getFileNames(){
  const arquivos = import.meta.glob("../data/*.json");
  const lista = Object.keys(arquivos).map(caminho => ({
    root: caminho,
    name: caminho.split("/").pop().replace(".json", "")
  }));
  return lista;
}

export default List;
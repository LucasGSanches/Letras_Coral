import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import List from "./pages/List"

function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");

  function getMusic(title){
    setSearch(title);
    setPage("home");
  }
  
  if(page === "list"){
    return <List getMusic={getMusic}/>
  }

  return <Home search={search} setPage={setPage}/>
}


export default App;

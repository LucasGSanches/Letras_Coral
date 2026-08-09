import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import List from "./pages/List"

function App() {
  const [page, setPage] = useState("home");
  const [music, setMusic] = useState("");
  
  if(page === "list"){
    return <List/>
  }

  return <Home chosenMusic={music}/>
}


export default App;

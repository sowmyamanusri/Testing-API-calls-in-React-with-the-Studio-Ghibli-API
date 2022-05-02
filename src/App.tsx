import './App.css';
import React,{useState,useEffect} from 'react';
import { GhilbliFilms } from './component/ghilbilFilm';
import fetchGhilbliFilms from './component/fetchGhilbliFlims';


 function App() {
  const[ghilbliFilms,setGhilbliFilms] = useState<GhilbliFilms>();

  useEffect((() => {
    const fetchFilms = async () =>{
      const loadedGhilbliFilms = await fetchGhilbliFilms();
      setGhilbliFilms(loadedGhilbliFilms);
  }
  fetchFilms();
  }),[])

   
  return(
    <div className="container">
    <h1> GhilbliFilms</h1>
    <p>{ghilbliFilms?.id}</p>
   <p>{ghilbliFilms?.title}</p>
    <img className="img" src={ghilbliFilms?.image} alt ={ghilbliFilms?.title} />
    </div>
  )
  }


export default App;

import './App.css';
import React,{useState,useEffect} from 'react';
import { GhilbliFilms } from './component/ghilbilFilm';
import fetchGhilbliFilms from './component/fetchGhilbliFlims';


 function App() {
  const[ghilbliFilms,setGhilbliFilms] = useState<GhilbliFilms>();
  const [ghilbliFilmsErrors,setGhilbliFilmsErrors] = useState<string>()
  useEffect((() => {
    const fetchFilms = async () =>{
      const loadedGhilbliFilms  = await fetchGhilbliFilms();
      if(loadedGhilbliFilms === "Oops… something went wrong, try again 🤕" || loadedGhilbliFilms === undefined){
        setGhilbliFilmsErrors(loadedGhilbliFilms);
      }else{
      setGhilbliFilms(loadedGhilbliFilms);
      }
  }
  fetchFilms();
  }),[])

   
  return(
    <div className="container">
    <h1> GhilbliFilms</h1>
    
    {!ghilbliFilmsErrors && <div>
    <p>{ghilbliFilms?.id}</p>
   <p>{ghilbliFilms?.title}</p>
    <img className="img" src={ghilbliFilms?.image} alt ={ghilbliFilms?.title} />
    </div>
    }
    
   </div>
  )
 }


export default App;

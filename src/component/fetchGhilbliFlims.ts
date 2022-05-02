
import { GhilbliFilms } from "./ghilbilFilm";
import axios from "axios";
 
export default async function fetchGhilbliFilms(){

  try {
    const { data, status } = await axios.get<Array<GhilbliFilms>>(
      "https://ghibliapi.herokuapp.com/films"
    ); 
    
    console.log("response status is: ", status);

     const result = data.filter(d =>d.title.includes('Castle in the Sky'))

    return {id:result[0].id,title:result[0].title,image:result[0].image};
    
    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
    } else {
      console.log("unexpected error: ", error);
    }
  }
}

  
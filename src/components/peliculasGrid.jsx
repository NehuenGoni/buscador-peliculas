import { PeliculaCard } from './PeliculaCard'
import styles from '../modules/PeliculasGrid.module.css'
import { useEffect, useState} from 'react'
import { useLocation } from "react-router";
import { get } from '../utils/httpClient'
import { Spinner } from './Spinner'
import { useParams } from 'react-router-dom';
import { URLstarRating } from './StarRating';

export function useQuery(){  //la exporto para poder reutilizarla
    return new URLSearchParams(useLocation().search)
}

export function PeliculasGrid(){
    const [movies, setMovies] = useState([]) //para modificar el estado, se utiliza la funcion setPeliculas
    const [isLoading, setIsLoading] = useState()// estado que lee el spinner

    const query = useQuery()
    const search = query.get("search") //esto viene de la ruta
    const location = useLocation().search
    const rate = location.substr(-2)

    useEffect(() => {
        setIsLoading(true)
        const searchUrl = search
            ? "/search/movie?query=" + search  //si hay una busqueda ejecuta esto
            : URLstarRating + rate // si no hay busqueda me muestra discover
        get(searchUrl)
            .then(data => {
                setMovies(data.results)//viene del servidor
                setIsLoading(false)
            });  //esta es la forma de parcear loque me devuelve la API a un objeto, y de ahi agregarlo al arreglo de peliculas
        
        }, [search, rate]) //se va a ejecutar cada vez que cambie [search]

    if(isLoading){
        return <Spinner/>
    }
    return(
        <ul className={styles.peliculasGrid}>
            {movies.map((movie) => (
                <PeliculaCard key={movie.id} movie={movie}/>
                ))}
        </ul>
    )
}
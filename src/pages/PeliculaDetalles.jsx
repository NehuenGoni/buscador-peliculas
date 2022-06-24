import styles from "../modules/PeliculaDetalles.module.css"
import { useParams } from 'react-router'
import { useEffect, useState } from "react"
import { get } from "../utils/httpClient"
import { Spinner } from "../components/Spinner"


export function PeliculaDetalles(){
    const { movieId } = useParams() // destructuring de los parametros que le pasamos a la url
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        setIsLoading(true) 
        get("/movie/" + movieId).then(data => {
            setMovie(data)
            setIsLoading(false) //se pone en false para que desaparezca el spinner
        })
    }, [movieId]) //no siempre va vacio, aveces depende del arreglo que tengo si cambia o no
    
    if(isLoading){
        return <Spinner/>
    }

    const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
    <div className={styles.detallesCotainer}>
        <img className={`${styles.col} ${styles.peliculaImage}`} 
            src={imageURL} 
            alt={movie.title} 
        />
        <div className={`${styles.col} ${styles.PeliculaDetalles}`} >
            <p className={styles.firstItem}>
                <strong>Titulo:</strong>{movie.title}
            </p>
            <p>
                <strong>Genero:</strong>{movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <p>
                <strong>Descripcion:</strong>{movie.overview}
            </p>
        </div>
    </div>
    )
}
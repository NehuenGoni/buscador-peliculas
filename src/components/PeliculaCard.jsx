import styles from '../modules/PeliculaCard.module.css'
import {Link}from "react-router-dom"
 
export function PeliculaCard({movie}){
    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.peliculaCard}>
            <Link to={"/movies/" + movie.id}> 
            <img 
            width={230}
            height={345}
            className={styles.peliculaImage} 
            src={imageURL} 
            alt={movie.title}/>
            </Link>
            <div>{movie.title}</div>
        </li>)
}
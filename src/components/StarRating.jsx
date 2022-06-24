import styles from '../modules/StarRating.module.css'
import {AiTwotoneStar} from 'react-icons/ai'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router'

export const URLstarRating = "/discover/movie?api_key=4d11ba8b290ff5f820c50294d32cc18f&vote_average.lte=0"

export function StarRating() {
    const [rating, setRating] = useState(0);  //en este estado voy a almacenar a las estrellas seleccionadas
    const [hover, setHover] = useState(null);  //relleno automatico de las estrellas con hover

    function resetFilter(){
        
    }

    useEffect(() => {
        handleSubmit()
    }, [rating]);

    if( hover == rating ){
        resetFilter()
    }

    const history = useHistory()
    const handleSubmit = () =>{ //le paso un evento, el input de la busqueda
        history.push(URLstarRating + `${rating*2}`)
        }

    return (
    <form className={styles.starForm}>
    <div className={styles.starDiv}>
        {[...Array(5)].map((star, i) => {  //creo un arreglo donde coloco cinco elementos de estrellas
            const ratingValue = i + 1; // le agrego uno para hacer mas simple el llamado
            return (
                <label className={styles.starLabel}>
                    <input 
                    className={styles.radio} 
                    type="radio" 
                    name='rating' 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)} 
                    />
                    <AiTwotoneStar 
                    className={styles.star}
                    color={ratingValue <= (hover || rating) ? '#F6271A' : '#947270'}
                    size='50px'
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                </label>)
        })}
        <p className={styles.p}>Busca Por Calificacion</p>
    </div>
    </form>
)
}

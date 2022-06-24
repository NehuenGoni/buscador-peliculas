import styles from '../modules/Buscador.module.css'
import { FcSearch } from 'react-icons/fc'
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router' //agregar nuevos elementos a la ruta
import { useQuery } from './peliculasGrid';

export function Buscador() {
    const query = useQuery()
    const search = query.get("search")
    
    const [buscadorText, setBuscadorText] = useState('');
    const history = useHistory() 
    
    useEffect(() => {
        setBuscadorText(search || '')
    }, [search]);
    
    const handleSubmit = (e) =>{ //le paso un evento, el submit de la busqueda
        e.preventDefault() // cancela la recarga de la pagina generado por el submit
        history.push("/?search=" + buscadorText)
    }

    return (
        <form className={styles.buscadorContainer} onSubmit={handleSubmit}>
            <div className={styles.buscadorBox}>
                <input className={styles.buscadorInput} type="text" value={buscadorText} onChange={(e)=> setBuscadorText(e.target.value)}/>
                <button className={styles.buscadorButton} type="submit"><FcSearch /></button>
            </div>
        </form>
    )
}

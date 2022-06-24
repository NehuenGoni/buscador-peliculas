import { ImSpinner4 } from 'react-icons/im'
import styles from '../modules/Spinner.module.css'

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner4 className={styles.spinning} size={70}/>
        </div>
    )
}

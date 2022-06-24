import { PeliculasGrid } from "./components/peliculasGrid";
import styles from '../src/modules/App.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from "react-router-dom"
import { PeliculaDetalles } from "./pages/PeliculaDetalles";
import { HomePage } from "./pages/HomePage";


export function App(){
    return <Router>
        <header className={styles.header}>
            <br/>
            <Link to="/"><h1 className={styles.title}>BUSCADOR DE PELICULAS</h1></Link>
            <br/>           
        </header>
        <main>
        <Switch>
              <Route exact path="/movies/:movieId"><PeliculaDetalles/></Route>
              <Route path="/"><HomePage/></Route>
        </Switch>
        </main>
        <footer className={styles.footer}>
        <Link to="/"><h3 className={styles.h3}>Home</h3></Link>
        </footer>
    </Router>
}
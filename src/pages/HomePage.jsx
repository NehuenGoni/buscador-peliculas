import { Buscador } from "../components/Buscador";
import { PeliculasGrid } from "../components/peliculasGrid";
import { StarRating } from "../components/StarRating";


export function HomePage(){
    return <div>
        <Buscador/>
        <StarRating/>
        <PeliculasGrid/>
    </div>
}
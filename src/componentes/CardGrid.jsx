import { useFetchCards } from "../hooks/useFetchCards";
import { Carta } from "./Carta";
import "../estilos/carta-tabla.css";

export const CardGrid = ({nombre}) => {
    const {cartas,isLoading} = useFetchCards(nombre); 

    
    return (
        <>
          <h3>Palabra buscada : "{nombre}"</h3>
          {
            isLoading && (<h2 >Cargando...</h2>)
          }
          
          <div className="coleccion-cartas">
            {cartas.map((propiedades) => (
              <Carta key={propiedades.id} {...propiedades}></Carta>
            ))}
          </div>
        </>
      );
}


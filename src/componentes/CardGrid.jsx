import { useFetchCards } from "../hooks/useFetchCards";
import { Carta } from "./Carta";
import "../estilos/carta-tabla.css";

export const CardGrid = ({nombre}) => {
    const {cartas,isLoading} = useFetchCards(nombre); 

    
    return (
        <>
          <h3>Palabra buscada : "{nombre}"</h3>
          {
            isLoading && (
              <span class="loader"></span>
            )
          }
          <div className="coleccion-cartas">
            {cartas.map((propiedades) => (
              <Carta key={propiedades.id} {...propiedades}></Carta>
            ))}
          </div>
        </>
      );
}


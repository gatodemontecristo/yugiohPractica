import { useFetchCards } from "../hooks/useFetchCards";
import { Carta } from "./Carta";
import "../estilos/carta-tabla.css";

export const CardGrid = ({ nombre }) => {
  const { cartas, isLoading } = useFetchCards(nombre);

  return (
    <>
      <h3 className="coleccion-titulo">Palabra buscada : "{nombre}"</h3>
      {isLoading ? (
        <span class="loader"></span>
      ) : (
        <div className="coleccion-cartas">
          {cartas.length > 0 ? (
            cartas.map((propiedades) => (
              <Carta key={propiedades.id} {...propiedades}></Carta>
            ))
          ) : (
            <div className="coleccion-mensaje">
              <img src="./otros/kaibanotfound.jpg" alt="" />
              <h3>No se encontraron cartas :(</h3>
            </div>
          )}
        </div>
      )}
    </>
  );
};

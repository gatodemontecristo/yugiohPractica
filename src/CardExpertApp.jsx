import { Fragment, useState } from "react";
import { CardGrid } from "./componentes/CardGrid";
import { BuscarCarta } from "./componentes/BuscarCarta";
import "./estilos/carta-buscador.css"

export const CardExpertApp = () => {
  const [nombre, setNombre] = useState("Tornado");

  return (
    <Fragment>
      <div className="buscador-custom">
        <h1>CardExpertApp</h1>
        <BuscarCarta
          nuevaBusquedaCarta={(value) => setNombre(value)}
        ></BuscarCarta>
      </div>
      <CardGrid key={nombre} nombre={nombre}></CardGrid>
    </Fragment>
  );
};

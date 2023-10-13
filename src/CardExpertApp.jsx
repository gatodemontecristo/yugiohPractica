import { Fragment, useState } from "react";
import { CardGrid } from "./componentes/CardGrid";

export const CardExpertApp = () => {
    const [nombre, setNombre] = useState("Tornado");

  return (
   <Fragment >
    <h1>CardExpertApp</h1>
        <CardGrid key={nombre} nombre={nombre}></CardGrid>
   
   </Fragment>
  )
}

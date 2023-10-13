import { useEffect, useState } from "react";
import { getCards } from "../helpers/getCards";


export const useFetchCards = (nombre) => {
    const [cartas, setcartas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCartas = async () => {
        const newCards = await getCards(nombre);
        setcartas(newCards);
        setIsLoading(false);
      };

      useEffect(() => {
        getCartas();
      }, []);

      return {
        cartas,
        isLoading
      }

}

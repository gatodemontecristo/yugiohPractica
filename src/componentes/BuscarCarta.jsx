import { useState } from "react";

export const BuscarCarta = ({ nuevaBusquedaCarta }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1) return;
    nuevaBusquedaCarta(inputValue.trim());
    setinputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar carta"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

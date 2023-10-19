

export const BuscarEstilo = (tipo) => {
    let estilo;
    if(tipo.includes("Monster")){
      estilo = "custom-cuerpo-mounstro";
    }else if(tipo.includes("Trap")){
      estilo = "custom-cuerpo-trampa";
    }else if(tipo.includes("Spell")){
      estilo = "custom-cuerpo-magia";
    }else{
      estilo = "custom-cuerpo-defecto";
    }
  return estilo;
}

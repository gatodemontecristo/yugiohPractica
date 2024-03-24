

export const BuscarEstilo = (tipo) => {
    let estilo;
    if(tipo.includes("XYZ")){
      estilo = "custom-cuerpo-mounstroXYZ";
    }else if(tipo.includes("Fusion")){
      estilo = "custom-cuerpo-mounstroFusion";
    }else if(tipo.includes("Pendulum")){
      estilo = "custom-cuerpo-mounstroPendulo";
    }else if(tipo.includes("Link")){
      estilo = "custom-cuerpo-mounstroLink";
    }else if(tipo.includes("Synchro")){
      estilo = "custom-cuerpo-mounstroSynchro";
    }else if(tipo.includes("Monster")){
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

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faHandFist } from "@fortawesome/free-solid-svg-icons";
import "../estilos/carta-estilo.css";
import { BuscarEstilo } from "./BuscarEstilo";

export const Carta = (cartita) => {
  let imagen_atributo, tipo_carta_spellTrap;
  if (cartita.attribute) {
    imagen_atributo = "./atributos/" + cartita.attribute + ".png";
    tipo_carta_spellTrap = "./otros/level.png";
  } else if (cartita.type == "Spell Card") {
    imagen_atributo = "./atributos/SPELL.png";
    tipo_carta_spellTrap = "./hechizos/" + cartita.race + ".png";
  } else {
    imagen_atributo = "./atributos/TRAP.png";
    tipo_carta_spellTrap = "./trampas/" + cartita.race + ".png";
  }

  let estilo = BuscarEstilo(cartita.type);
  let descSplit = cartita.desc.split("\n");

  return (
      <Card className="custom-carta">
        <div className="custom-titulo">
          <CardTitle tag="h5" style={{ marginBottom: "0px" }}>
            {cartita.name}
          </CardTitle>
          <div
            // style={{
            //   display: cartita.attribute ? "flex" : "none",
            //   alignItems: "center",
            // }}

            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>{cartita.level}</p>
            <img className="" src={tipo_carta_spellTrap} alt="" />
          </div>
        </div>

        <div className="custom-imagenes">
          <img
            className="custom-imagenes-01"
            alt="Sample"
            src={cartita.image}
          />
          <img className="custom-imagenes-02" src={imagen_atributo} alt="" />
          <div
            className="custom-ataque"
            style={{ display: cartita.attribute ? "flex" : "none" }}
          >
            <p>
              <FontAwesomeIcon icon={faHandFist} />
              {cartita.atk}
            </p>
          </div>
          <div
            className="custom-defensa"
            style={{ display: cartita.attribute ? "flex" : "none" }}
          >
            <p>
              <FontAwesomeIcon icon={faShieldHalved} />
              {cartita.def}
            </p>
          </div>
        </div>
        <CardBody className={`${estilo} custom-cuerpo`}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <CardSubtitle className="custom-subtitle m-1 p-2" tag="h6">
              {cartita.race}
            </CardSubtitle>
            <CardSubtitle className="custom-subtitle m-1 p-2" tag="h6">
              {cartita.type}
            </CardSubtitle>
            <CardSubtitle
              className="custom-subtitle m-1 p-2"
              tag="h6"
              style={{ display: cartita.attribute ? "block" : "none" }}
            >
              {cartita.attribute}
            </CardSubtitle>
          </div>
          <div style={{ marginTop: "15px" }}>
            {descSplit.length==2 ? (
              // Si la condición es verdadera, muestra este elemento
              <Fragment>
                <p>{descSplit[0]}</p>
                <p>{descSplit[1]}</p>
              </Fragment>
            ) : (
              // Si la condición es falsa, muestra este elemento 
              //ola developer
              <p>{descSplit[0]}</p>
            )}
          </div>
        </CardBody>
      </Card>
  );
};

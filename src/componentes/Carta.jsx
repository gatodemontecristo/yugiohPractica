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

export const Carta = (cartita) => {
  return (
    <Fragment>
      <Card className="custom-carta"
      >
        <div className="custom-titulo">
          <CardTitle tag="h5" style={{marginBottom:"0px"}} >{cartita.name}</CardTitle>
          <div style={{display:"flex", alignItems:"center"}}>
            <p>{cartita.level}</p>
            <img className="" src="./otros/level.png" alt="" />
          </div>
        </div>

        <div className="custom-imagenes">
          <img
            className="custom-imagenes-01"
            alt="Sample"
            src={cartita.image}
          />
          <img
            className="custom-imagenes-02"
            src="./atributos/LAUGH.svg"
            alt=""
          />
          <div className="custom-ataque">
            <p>
              <FontAwesomeIcon icon={faHandFist} />
              {cartita.atk}
            </p>
          </div>
          <div className="custom-defensa">
            <p>
              <FontAwesomeIcon icon={faShieldHalved} />
              {cartita.def}
            </p>
          </div>
        </div> 
        <CardBody className="custom-cuerpo">
          <div style={{ display: "flex" }}>
            <CardSubtitle className="custom-subtitle m-1 p-2" tag="h6">
              Wyrm
            </CardSubtitle>
            <CardSubtitle className="custom-subtitle m-1 p-2" tag="h6">
              Xyz
            </CardSubtitle>
            <CardSubtitle className="custom-subtitle m-1 p-2" tag="h6">
              Effect
            </CardSubtitle>
          </div>
          <div style={{marginTop:"15px"}}>
            <p>2 Level 4 monsters</p>
            <p>
              {cartita.desc}
            </p>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

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

export const Carta = () => {
  return (
    <Fragment>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <div className="custom-titulo">
          <CardTitle tag="h5" style={{marginBottom:"0px"}} >Tornado Dragon</CardTitle>
          <div style={{display:"flex", alignItems:"center"}}>
            <p>4</p>
            <img className="" src="./otros/level.png" alt="" />
          </div>
        </div>

        <div className="custom-imagenes">
          <img
            className="custom-imagenes-01"
            alt="Sample"
            src="https://images.ygoprodeck.com/images/cards_cropped/6983839.jpg"
          />
          <img
            className="custom-imagenes-02"
            src="./atributos/LAUGH.svg"
            alt=""
          />
          <div className="custom-ataque">
            <p>
              <FontAwesomeIcon icon={faHandFist} />
              Ataque
            </p>
          </div>
          <div className="custom-defensa">
            <p>
              <FontAwesomeIcon icon={faShieldHalved} />
              Defensa
            </p>
          </div>
        </div>
        <CardBody>
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
              Once per turn (Quick Effect): You can detach 1 material from this
              card, then target 1 Spell/Trap on the field; destroy it.
            </p>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

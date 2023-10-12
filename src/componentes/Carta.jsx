import  "../estilos/carta-estilo.css";    
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
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";


export const Carta = () => {
  return (
    <Fragment>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
        <div style={{display:"flex"}}>
          <CardSubtitle className="m-2 p-2 text-muted " tag="h6">
            Wyrm
          </CardSubtitle>
          <CardSubtitle className="m-2 p-2 text-muted" tag="h6">
            Xyz
          </CardSubtitle>
          <CardSubtitle className="m-2 p-2 text-muted" tag="h6">
            Effect
          </CardSubtitle>

         </div>

          <img src="./atributos/LAUGH.svg" alt="" />
          <CardTitle tag="h5">Card title</CardTitle>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>
            {" "}
            <FontAwesomeIcon icon={faShieldHalved} />
            Button
          </Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

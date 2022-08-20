import { Card, Col } from "react-bootstrap";

export default function Profesor({ data }) {
  const { nombre, imagen, cargo, descripcion } = data;
  return (
    <Col>
      <Card className="text-black p-3 text-center profesor">
        <Card.Body>
          <Card.Img
            src={imagen}
            alt="profesor"
            style={{ height: 80, width: 80, objectFit: "cover" }}
          />
          <Card.Title className="fw-semibold pt-2">{nombre}</Card.Title>
          <span className="fw-normal text-muted">{cargo}</span>
          <Card.Text className="pt-2">{descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

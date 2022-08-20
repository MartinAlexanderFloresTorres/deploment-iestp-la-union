import { Card, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import Estrellas from "./Estrellas";

export default function Carrera({ data }) {
  const { nombre, resumen, url, imagen, duracion } = data;
  const { push } = useRouter();
  return (
    <Col>
      <Card className="shadow border-light text-center">
        <Card.Img
          variant="top"
          src={imagen}
          role="button"
          alt={nombre}
          style={{ height: 250, objectFit: "cover" }}
          onClick={() => push(`/carreras/${url}`)}
        />
        <Card.Body className="pt-1">
          <Card.Title
            className="fw-bold cortar-titulo mb-0"
            style={{ color: "initial" }}
          >
            {nombre}
          </Card.Title>
          <p className="fw-semibold text-duracion">Duracion: {duracion}</p>
          <Card.Text className="text-secondary lh-sm cortar-texto mb-3">
            {resumen}
          </Card.Text>

          <Link href={`/carreras/${url}`}>
            <Button className="px-5 d-block container-fluid">Ver Más</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

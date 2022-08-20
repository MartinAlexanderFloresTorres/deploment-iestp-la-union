import { Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Estudios() {
  return (
    <Row xs={1} lg={2} className="align-items-center py-5 ">
      <Col className="mb-5 mb-lg-0">
        <h2 className="text-secondary fs-3">Estudios</h2>
        <h3 className="fw-bold fs-2">Resumen de postulación</h3>
        <div className="py-4">
          <p className="mb-3">
            Queremos que vivas una experiencia académica a tu alcance. Postula,
            ingresa y prepárate para salir adelante.
          </p>
          <div className="mb-3">
            La postulación será evaluada, mediante un examen de conocimientos y
            una evaluación de aptitudes, el perfil del ingresante. Se desarrolla
            en etapas o fases, según el Cronograma de Actividades. Los
            requisitos que necesitas son:
            <ul className="fw-semibold">
              <li>Copia del DNI o carné de extranjería.</li>
              <li>Fotográfica tamaño carnet</li>
              <li>Certificado original de estudios secundarios</li>
              <li>Partida de nacimientos original</li>
            </ul>
          </div>
          <p className="mb-3">
            ¡Empezaste con ventaja, ya eres parte de los mejores! Prepárate para
            vivir tu carrera desde el primer día en el instituto iestp la unión.
          </p>
        </div>
        <Link href={"/contacto"}>
          <Button as="a" className="px-5 py-2">
            Examen de Admisión
          </Button>
        </Link>
      </Col>

      <Row xs={1} md={2} className="g-3 col-sm-12 col-lg-6 text-center mt-0">
        <Col>
          <Card className="shadow-sm border-light ">
            <Card.Img
              src="/svg/ingreso.svg"
              alt="ingreso"
              style={{ height: 150 }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">Ingresa al instante</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              src="/svg/alcancia.svg"
              alt="alcancia"
              style={{ height: 150 }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">Paga solo por ciclo</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img src="/svg/leer.svg" alt="leer" style={{ height: 150 }} />
            <Card.Body>
              <Card.Title className="fw-bold">
                Finaliza tus estudios en poco tiempo
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              src="/svg/hojas.svg"
              alt="hojas"
              style={{ height: 150 }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">
                Recibe el título al nombre de la nación
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Row>
  );
}

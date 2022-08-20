import { Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Facilidades() {
  return (
    <Row
      xs={1}
      lg={2}
      className="align-items-center py-5 mb-5"
      id="facilidades"
    >
      <Col className="mb-5 mb-lg-0">
        <h2 className="text-secondary fs-3">Facilidades</h2>
        <h3 className="fw-bold fs-2">Mejor enseñanza</h3>
        <div className="py-4">
          <p className="mb-3">
            La educación puede brindar considerables beneficios a la sociedad,
            no sólo a través de oportunidades de empleo e ingreso sino también a
            través de mayores habilidades, la mejora del estatus social y el
            acceso a redes.
          </p>
          <p className="mb-3">
            La Propuesta Pedagógica es un instrumento en el que se plasman las
            intenciones que una institución educativa propone para el proceso de
            enseñanza aprendizaje.
          </p>
          <p className="mb-3">
            La educación a lo largo de la vida se basa en cuatro pilares:
            aprender a conocer, aprender a hacer, aprender a vivir juntos,
            aprender a ser.
          </p>
        </div>
        <Link href={"/nosotros"}>
          <Button as="a" className="px-5 py-2">
            Saber Más
          </Button>
        </Link>
      </Col>

      <Row xs={1} md={2} className="g-3 col-sm-12 col-lg-6">
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              variant="top"
              src="/svg/biblioteca.svg"
              alt="biblioteca"
              style={{ height: 100 }}
            />
            <Card.Body>
              <Card.Title>Biblioteca virtual</Card.Title>
              <Card.Text className="text-secondary lh-sm">
                Brinda el acceso al conocimiento de la información digital,
                gracias a una serie de recursos para la comunidad estudiantil.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              variant="top"
              src="/svg/laboratorio.svg"
              alt="laboratorio"
              style={{ height: 100 }}
            />
            <Card.Body>
              <Card.Title>Laboratorios</Card.Title>
              <Card.Text className="text-secondary lh-sm">
                La institución brinda laboratorios para que los estudiantes
                logren poner en práctica sus conocimientos adquiridos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              variant="top"
              src="/svg/computo.svg"
              alt="computo"
              style={{ height: 100 }}
            />
            <Card.Body>
              <Card.Title>Salas de cómputo </Card.Title>
              <Card.Text className="text-secondary lh-sm">
                Tenemos una sala de computo donde te brindamos equipos de ultima
                generación logrando así poder realizar diferentes actividades.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              variant="top"
              src="/svg/internet.svg"
              alt="internet"
              style={{ height: 100 }}
            />
            <Card.Body>
              <Card.Title>Acceso a internet</Card.Title>
              <Card.Text className="text-secondary lh-sm">
                El instituto ofrece internet gratis para toda la institución
                educativa, contamos con internet de alta velocidad y con un buen
                alcance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Row>
  );
}

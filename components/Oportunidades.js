import { Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Oportunidades() {
  return (
    <Row xs={1} lg={2} className="align-items-center py-5 ">
      <Col className="mb-5 mb-lg-0">
        <h2 className="text-secondary fs-3">El futuro depende de ti</h2>
        <h3 className="fw-bold fs-2">Comienza estudiando</h3>
        <div className="py-4">
          <p className="mb-3">
            Formando profesionales de Éxito. Muchos de nuestros egresados se
            encuentran trabajando a los largo y ancho de nuestro territorio
            nacional en empresas importantes de las diferentes industrias a
            afines a nuestros programas de estudios.
          </p>
          <p className="mb-3">
            Tú puedes ser uno de ellos, que esperas postula y comienza a
            estudiar en esta gran institución educativa.
          </p>
          <p className="mb-3">
            Locura es hacer lo mismo una y otra vez esperando obtener resultados
            diferentes{" "}
            <span className="fw-bold">
              Siempre parece imposible hasta que se hace.
            </span>
          </p>
        </div>
        <Link href={"/contacto"}>
          <Button as="a" className="px-5 py-2">
            Postula ahora
          </Button>
        </Link>
      </Col>

      <Row xs={1} md={2} className="g-3 col-sm-12 col-lg-6 text-center mt-0">
        <Col>
          <Card className="shadow-sm border-light ">
            <Card.Img
              src="/svg/graduacion.svg"
              alt="graduacion"
              style={{ height: 100 }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">Educación</Card.Title>
              <Card.Text className="text-secondary lh-sm">
                La mente es como un paracaídas: sólo funciona si se abre.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              src="/svg/startup.svg"
              alt="startup"
              style={{ height: 100 }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">Empleabilidad</Card.Title>
              <Card.Text className="text-secondary lh-sm">
                El trabajo que nunca se empieza es el que tarda más en
                realizarse.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              src="/svg/netflix.svg"
              alt="netflix"
              style={{ height: 100 }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">Oportunidades</Card.Title>
              <Card.Text className="text-secondary lh-sm">
                Piensa en positivo. Tener la actitud correcta es fundamental
                para conseguir cosas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              src="/svg/convenios.svg"
              alt="convenios"
              style={{ height: 100 }}
            />
            <Card.Body>
              <Card.Title className="fw-bold">Convenios</Card.Title>
              <Card.Text className="text-secondary lh-sm">
                La institución te brinda convenidos con múltiples universidades
                lograr impulsar tu carrera profesional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Row>
  );
}

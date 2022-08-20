import { Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Bienvenida() {
  return (
    <section className="align-items-center py-5 ">
      <div>
        <h2 className="text-secondary fs-3">Sobre Nosotros</h2>
        <h3 className="fw-bold fs-2">Bienvenidos a la IESTP LA UNIÓN</h3>
      </div>

      <Row xs={1} md={2} lg={3} className="g-3 mt-0 py-4 mb-3">
        <Col>
          <Card
            className="shadow-sm border-light p-2"
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="fw-bold">Quienes Somos</Card.Title>

              <p className="mb-3">
                Somos la excelencia en formación profesional tecnológica.
              </p>

              <p className="mb-3">
                Vemos en cada uno de nuestros docentes, egresados y estudiantes
                a un emprendedor en potencia, capaz de contribuir al desarrollo
                de su país con actitud ética y sentido humanista.
              </p>
              <p className="mb-3">Bienvenido.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="shadow-sm border-light p-2"
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="fw-bold">Nuestra misión</Card.Title>
              <p className="mb-3">
                Formar profesionales emprendedores, con valores, sentido
                humanista, científico y tecnológico comprometidos con la
                transformación de la sociedad global para el desarrollo
                sostenible.
              </p>
              <p className="mb-3">
                Brindando una oferta académica de excelencia y accesible, que
                permita formar profesionales, con las bases de la investigación
                y desarrollo tecnológico
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="shadow-sm border-light p-2"
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="fw-bold">Nuestra visión</Card.Title>
              <p className="mb-3">
                Ser <span className="fw-bold">reconocidos </span> como un
                instituto de calidad inclusiva y accesible a toda la población y
                líderes en la formación de{" "}
                <span className="fw-bold">profesionales competentes.</span>
              </p>
              <p className="mb-3">
                Nuestro sueño empezó hace años, el tuyo empieza hoy. Estamos
                aquí para ayudarte a cumplirlo y estaremos aquí cada vez que nos
                necesites.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Link href={"/contacto"}>
        <Button as="a" className="px-5 py-2">
          Conocer más
        </Button>
      </Link>
    </section>
  );
}

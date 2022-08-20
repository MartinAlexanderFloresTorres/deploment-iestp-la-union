import { Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Profesores() {
  return (
    <Row xs={1} lg={2} className="align-items-center py-5 mb-5">
      <Col className="mb-5 mb-lg-0">
        <h2 className="text-secondary fs-3">Profesores</h2>
        <h3 className="fw-bold fs-2">Conoce a los profesores</h3>
        <div className="py-4">
          <p className="mb-3">
            En la institución educativa contamos con excelentes profesores,
            logrando un buen aprendizaje hacia los estudiantes así lograras
            obtener una buena enseñanza de calidad.
          </p>
          <p className="mb-3">
            El Consejo Asesor está integrado por el Director General quien lo
            preside, el Jefe de Unidad, los Jefes de los Programas de Estudios,
            y El Jefe de Área Administrativa.
          </p>
          <p className="mb-3">
            Siendo una de sus funciones aprobar y dirigir la ejecución, en todos
            sus alcances, asumiendo la responsabilidad, del desarrollo del
            Proyecto Educativo Institucional (PEI) y del presupuesto anual de la
            institución (PIA).
          </p>
        </div>
        <Link href={"/contacto"}>
          <Button className="px-5 py-2">Conocelos</Button>
        </Link>
      </Col>

      <Row xs={1} md={2} className="g-3 col-sm-12 col-lg-6 mt-0">
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              variant="top"
              src="/img/profesores/profesor2.webp"
              alt="profesor"
              className="imagen_normal"
              style={{ height: 250 }}
            />
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              variant="top"
              src="/img/profesores/profesor3.webp"
              alt="profesor"
              className="imagen_normal"
              style={{ height: 250 }}
            />
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              variant="top"
              src="/img/profesores/profesor4.webp"
              alt="profesor"
              className="imagen_normal"
              style={{ height: 250 }}
            />
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Img
              variant="top"
              src="/img/profesores/profesor5.webp"
              alt="profesor"
              className="imagen_normal"
              style={{ height: 250 }}
            />
          </Card>
        </Col>
      </Row>
    </Row>
  );
}

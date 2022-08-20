import { Col, Nav, Row, Tab, Badge, ListGroup } from "react-bootstrap";

export default function MallaCurricular({ data }) {
  const {
    informacion: { ciclos },
  } = data;
  return (
    <div className="mb-5">
      <h2 className="py-4 fw-bold">Malla curricular</h2>
      <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
        <Row>
          <Col sm={3} className="mb-5">
            <Nav variant="pills" className="flex-column">
              {ciclos.map((ciclo) => (
                <Nav.Item key={ciclo.id} className="bg-light mb-1">
                  <Nav.Link eventKey={ciclo.id}>{ciclo.nombre}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {ciclos.map((ciclo) => (
                <Tab.Pane key={ciclo.id} eventKey={ciclo.id}>
                  <ListGroup as="div" numbered>
                    <h3 className="fw-bold fs-3 mb-3 text-primary">
                      {ciclo.titulo}
                    </h3>
                    {ciclo.informacion.map((item) => (
                      <ListGroup.Item
                        key={item.id}
                        as="div"
                        className="d-flex flex-sm-wrap justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{item.nombre}</div>
                        </div>
                        <span className="fw-semibold px-3">Creditos</span>
                        <Badge bg="primary" pill>
                          {item.creditos}
                        </Badge>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

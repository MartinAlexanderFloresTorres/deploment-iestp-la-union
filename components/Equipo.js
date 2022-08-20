import Row from "react-bootstrap/Row";
import { profesores } from "../data/profesores";
import Profesor from "./Profesor";

export default function Equipo() {
  return (
    <section className="fondo">
      <div className="max">
        <section className="py-5 mb-5">
          <div className="text-center mb-5">
            <h2 className="fs-3">¿Por qué Somos los mejores?</h2>
            <h3 className="fs-1 fw-bolder fs-2">Conozca a nuestro equipo</h3>
          </div>
          <Row xs={1} md={2} lg={3} className="g-4 ">
            {profesores.length > 0 &&
              profesores.map((item) => <Profesor key={item.id} data={item} />)}
          </Row>
        </section>
      </div>
    </section>
  );
}

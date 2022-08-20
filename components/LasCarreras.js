import useCarreras from "../hooks/useCarreras";
import Carrera from "./Carrera";
import Row from "react-bootstrap/Row";

export default function LasCarreras() {
  const { carreras } = useCarreras();
  return (
    <section className="py-5 mb-5" id="carreras">
      <div className="text-center mb-5">
        <h2 className="fs-3">Carreras</h2>
        <h3 className="fs-1 fw-bolder fs-2">Nuestras Carreras</h3>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 ">
        {carreras.length > 0
          ? carreras.map((carrera) => (
              <Carrera key={carrera.id} data={carrera} />
            ))
          : "No hay carreras"}
      </Row>
    </section>
  );
}

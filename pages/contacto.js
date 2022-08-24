import { Badge, ListGroup } from "react-bootstrap";
import Banner from "../components/Banner";
import Formulario from "../components/Formulario";
import Layout from "../layout/Layout";
import styles from "../styles/Contacto.module.css";

export default function Contacto() {
  return (
    <Layout pagina={"Contacto"}>
      <Banner bg={"/img/carreras/arquitectura-2.webp"}>
        <div className={styles.presentacion}>
          <p className={styles.subTitulo}>Contactenos</p>
          <h1 className={styles.titulo}>Mantente En Contacto</h1>
          <p className={styles.page}>Inicio / Contacto</p>
        </div>
      </Banner>
      <section
        className={`row max ${styles.contacto}`}
        style={{ marginBottom: 100, marginLeft: "auto", marginRight: "auto" }}
      >
        <div
          className="col-lg-6 bg-white border p-sm-5 p-4 rounded"
          style={{ marginTop: -200, zIndex: 100 }}
        >
          <Formulario />
        </div>

        <ListGroup className="col-lg-6 px-lg-5 pt-lg-0 pt-5" as="div" numbered>
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Sede principal</div>
              Calle Sinchi Roca, La Unión - Piura
            </div>
            <Badge bg="primary" pill>
              <svg
                className="w-6 h-6"
                fill="none"
                width="19"
                height="19"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Llamanos</div>
              <a href="tel:902345321" className="d-block">
                +51 902345321
              </a>
              <a href="tel:933444589" className="d-block">
                +51 933444589
              </a>
              <a href="tel:934539233" className="d-block">
                +51 934539233
              </a>
            </div>
            <Badge bg="primary" pill>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="div"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Email</div>
              <a href="mailto:iestplaunion2020@gmail.com">
                iestplaunion2020@gmail.com
              </a>
            </div>
            <Badge bg="primary" pill>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </section>
    </Layout>
  );
}

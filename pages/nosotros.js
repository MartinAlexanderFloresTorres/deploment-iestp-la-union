import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Banner from "../components/Banner";
import Bienvenida from "../components/Bienvenida";
import Equipo from "../components/Equipo";
import Logros from "../components/Logros";
import Modal from "../components/Modal";
import Noticias from "../components/Noticias";
import Testimoniales from "../components/Testimoniales";
import { handleBody } from "../helpers";
import Layout from "../layout/Layout";
import styles from "../styles/Nosotros.module.css";

export default function Nosotros() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    handleBody(play);
  }, [play]);
  return (
    <Layout pagina={"Nosotros"}>
      {play && (
        <Modal setEstado={setPlay}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Oq9ND8y8g74"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal>
      )}
      <Banner bg={"/img/carreras/contabilidad-2.webp"}>
        <div className={styles.presentacion}>
          <button
            className={styles.play}
            title="Reproducir"
            onClick={() => setPlay(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <p className={styles.page}>Inicio / Nosotros</p>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.icono}>
                <Card.Img
                  src="/svg/profesionalismo.svg"
                  style={{ height: 60 }}
                  alt="profesionalismo"
                />
              </div>
              <div>
                <h3 className="fw-bold fs-5">Profesionalismo</h3>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icono}>
                <Card.Img
                  src="/svg/estudiantes.svg"
                  style={{ height: 60 }}
                  alt="estudiantes"
                />
              </div>
              <div>
                <h3 className="fw-bold fs-5">Calidad</h3>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icono}>
                <Card.Img
                  src="/svg/facil.svg"
                  style={{ height: 60 }}
                  alt="facil"
                />
              </div>
              <div>
                <h3 className="fw-bold fs-5">Facilidad</h3>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icono}>
                <Card.Img src="/svg/job.svg" style={{ height: 60 }} alt="job" />
              </div>
              <div>
                <h3 className="fw-bold fs-5">Empleabilidad</h3>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icono}>
                <Card.Img
                  src="/svg/productividad.svg"
                  style={{ height: 60 }}
                  alt="productividad"
                />
              </div>
              <div>
                <h3 className="fw-bold fs-5">Productividad</h3>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icono}>
                <Card.Img
                  src="/svg/crecimiento.svg"
                  style={{ height: 60 }}
                  alt="crecimiento"
                />
              </div>
              <div>
                <h3 className="fw-bold fs-5">Crecimiento</h3>
              </div>
            </div>
          </div>
        </div>
      </Banner>

      <section className="max">
        <Bienvenida />
      </section>
      <Equipo />
      <section className="max">
        <Noticias />
      </section>
      <Logros bg={"/fondo6.webp"} />
      <section className="max">
        <Testimoniales />
      </section>
    </Layout>
  );
}

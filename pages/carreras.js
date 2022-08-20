import Link from "next/link";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import Informate from "../components/Informate";
import LasCarreras from "../components/LasCarreras";
import Oportunidades from "../components/Oportunidades";
import Profesores from "../components/Profesores";
import Baneficios from "../components/Baneficios";
import styles from "../styles/Carreras.module.css";

export default function Carreras() {
  return (
    <Layout pagina={"Carreras"}>
      <Banner bg={"/img/carreras/arquitectura-4.webp"}>
        <div className={styles.presentacion}>
          <h1 className={styles.titulo}>Te Brindamos Las Mejores Carreras</h1>
          <p className={styles.parrafo}>
            En la institución educativa IESTP LA UNIÓN te brindamos enseñanza de
            calidad, formando estudiantes listos para ingresar al campo laboral.
          </p>
          <a className={styles.boton} href="#carreras" title="Mostrar Carreras">
            <svg
              className="w-6 h-6"
              fill="none"
              height={50}
              width={50}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </a>
        </div>
        <p className={styles.page}>Inicio / Carreras</p>
      </Banner>
      <section className="max">
        <Oportunidades />
        <Baneficios />
        <LasCarreras />
      </section>
      <Informate bg={"/fondo3.webp"}>
        <h2 className="titulo">Tus metas dependen de una buena enseñanza</h2>
        <p className="parrafo">
          ¡Estudia! No para saber una cosa más, sino para saberla mejor.
          Comienza estudiando con este gran equipo de profesores capacitados
          para brindarte una mejor enseñanza de calidad.
        </p>
        <Link href={"/admision"}>
          <a className="boton">Examen de admisión</a>
        </Link>
      </Informate>
      <section className="max">
        <Profesores />
      </section>
    </Layout>
  );
}

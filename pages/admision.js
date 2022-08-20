import Link from "next/link";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import Baneficios from "../components/Baneficios";
import Estudios from "../components/Estudios";
import Informate from "../components/Informate";
import LasCarreras from "../components/LasCarreras";
import Requisitos from "../components/Requisitos";
import styles from "../styles/Admision.module.css";
import Testimoniales from "../components/Testimoniales";
import { getYear } from "../helpers";

export default function Admision() {
  return (
    <Layout pagina={"Admisión"}>
      <Banner bg={"/img/carreras/contabilidad-5.webp"}>
        <div className={styles.presentacion}>
          <p className={styles.subTitulo}>Postula ahora</p>
          <h1 className={styles.titulo}>Admisión {getYear()}</h1>
          <p className={styles.page}>Inicio / Admisión</p>
        </div>
      </Banner>
      <section className="max">
        <Estudios />
      </section>
      <section className="fondo">
        <div className="max">
          <LasCarreras />
        </div>
      </section>
      <section className="max">
        <Baneficios />
      </section>
      <Informate bg={"/fondo5.webp"}>
        <h2 className="titulo">El futuro te espera</h2>
        <p className="parrafo">
          Nunca consideres el estudio como una obligación, sino como una
          oportunidad para desarrollar tus habilidades y poder emprender, es
          maravilloso crear tu propio futuro
        </p>
        <Link href={"/contacto"}>
          <a className="boton">Comieza Ahora</a>
        </Link>
      </Informate>
      <section className="max">
        <Requisitos />
        <Testimoniales />
      </section>
    </Layout>
  );
}

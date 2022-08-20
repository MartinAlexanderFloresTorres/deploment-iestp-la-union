import Banner from "../components/Banner";
import Facilidades from "../components/Facilidades";
import Informate from "../components/Informate";
import Noticias from "../components/Noticias";
import Profesores from "../components/Profesores";
import Testimoniales from "../components/Testimoniales";
import Layout from "../layout/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Equipo from "../components/Equipo";
import Logros from "../components/Logros";
import Baneficios from "../components/Baneficios";
import LasCarreras from "../components/LasCarreras";
import useCarreras from "../hooks/useCarreras";

export default function Home() {
  const { enlaces } = useCarreras();

  return (
    <Layout pagina={"Bienvenido"}>
      <Banner bg={"/img/iestp.webp"} clase={"opacidad"}>
        <div className={styles.presentacion}>
          <h1 className={styles.titulo} style={{ maxWidth: 900 }}>
            EL INSTITUTO DE PRESTIGIO DEL BAJO PIURA
          </h1>
          <p className={styles.parrafo}>
            ¡Aquí comienza tu futuro profesional!
          </p>
          <a className={styles.boton} href="#facilidades">
            Comenzar
          </a>
        </div>
        <div className={styles.carreras}>
          {enlaces.length > 0 &&
            enlaces.map((item) => (
              <Link key={item.id} href={`/carreras/${item.url}`}>
                <a className={styles.boton}>{item.nombre}</a>
              </Link>
            ))}
        </div>
      </Banner>
      <section className="max">
        <Baneficios />
        <Facilidades />
        <LasCarreras />
      </section>
      <Equipo />
      <section className="max">
        <Profesores />
      </section>
      <Informate bg={"/fondo1.webp"}>
        <h2 className="titulo">Postula hoy mismo</h2>
        <p className="parrafo">
          La primera tarea de la educación es agitar la vida, pero dejarla libre
          para que se desarrolle. Tu futuro está en tus manos, Comienza hoy a
          ser parte de esta gran institución, Brindándote enseñanza de calidad.
        </p>
        <Link href={"/contacto"}>
          <a className="boton">Postula Ahora</a>
        </Link>
      </Informate>
      <section className="max">
        <Noticias />
      </section>
      <Logros bg={"/fondo2.webp"} />
      <section className="max">
        <Testimoniales />
      </section>
    </Layout>
  );
}

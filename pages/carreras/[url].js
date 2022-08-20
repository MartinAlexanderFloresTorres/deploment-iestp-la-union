import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Banner from "../../components/Banner";
import Layout from "../../layout/Layout";
import Image from "next/image";
import styles from "../../styles/InfoCarrera.module.css";
import Informate from "../../components/Informate";
import Requisitos from "../../components/Requisitos";
import MallaCurricular from "../../components/malla_curricular/mallaCurricular";
import { carreras } from "../../data/carreras";
import Alert from "react-bootstrap/Alert";
import { formatearDinero, handleBody } from "../../helpers";
import Modal from "../../components/Modal";
import { Card } from "react-bootstrap";

export default function InfoCarrera() {
  const [carrera, setCarrera] = useState({});
  const [alerta, setAlerta] = useState(false);
  const [visualizar, setVisualizar] = useState(false);
  const [vista, setVista] = useState("");

  const handleVista = (url = "") => {
    setVista(url);
    setVisualizar(true);
  };

  useEffect(() => {
    handleBody(visualizar);
  }, [visualizar]);

  const {
    query: { url },
  } = useRouter();

  useEffect(() => {
    if (url) {
      const data = carreras.find((item) => item.url === url);
      if (data) {
        setCarrera(data);
      } else {
        setAlerta(true);
        setCarrera([]);
      }
    }
  }, [url]);

  return (
    <Layout pagina={`Nombre de la carrera`}>
      {visualizar && (
        <Modal setEstado={setVisualizar}>
          <Card className="p-1">
            <Card.Img
              src={vista}
              style={{ height: 360 }}
              alt="profesionalismo"
            />
          </Card>
        </Modal>
      )}
      <div>
        <Banner
          bg={`${
            alerta ? "/img/carreras/arquitectura-7.webp" : carrera?.imagen
          }`}
        >
          <div className={styles.presentacion}>
            <h1 className={styles.titulo}>
              {alerta ? "Lo sentimos URL no valida" : carrera?.nombre}
            </h1>
            {carrera?.duracion && (
              <>
                <p className={styles.subTitulo}>El futuro estas en tus manos</p>
                <p className={styles.duracion}>Duración: {carrera?.duracion}</p>
              </>
            )}
          </div>
        </Banner>

        <section className="max">
          {alerta ? (
            <Alert className="text-center" variant="danger">
              No se encontralos resultados
            </Alert>
          ) : (
            <>
              <div>
                <Link href={"/carreras"}>
                  <a className="btn btn-primary d-inline-flex aling-items-center gap-1 mb-5">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      width={20}
                      height={20}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Volver a las carreras
                  </a>
                </Link>
                <section className={styles.grid}>
                  <div>
                    <h1 className={styles.titulo}>{carrera?.nombre}</h1>
                    <h2 className="fw-bold fs-4 mb-4">
                      {carrera?.informacion?.pregunta}
                    </h2>
                    <p>{carrera?.informacion?.respuesta}</p>
                    <p className={styles.negrita}>
                      {carrera?.informacion?.frase}
                    </p>
                    <p>{carrera?.informacion?.resumen}</p>
                  </div>

                  <div className={styles.rigth}>
                    <div className={styles.imagen}>
                      {carrera?.imagen ? (
                        <Image
                          layout="responsive"
                          width={300}
                          height={200}
                          src={carrera?.imagen}
                          alt="carrera"
                        />
                      ) : (
                        "Cargando..."
                      )}
                    </div>
                    <div>
                      <div className={styles.box}>
                        <h2 className={styles.subTitulo}>Profesores</h2>
                        <div className={styles.tecnologias}>
                          {carrera?.informacion?.profesores ? (
                            carrera?.informacion?.profesores?.map(
                              (profesor) => (
                                <span key={profesor.id}>{profesor.nombre}</span>
                              )
                            )
                          ) : (
                            <span>Nombre y apellido</span>
                          )}
                        </div>
                      </div>
                      <div className={styles.item}>
                        <h2>Contactar</h2>
                        <a href="#">iestplaunion@gmail.com</a>
                      </div>
                      <div className={styles.item}>
                        <h2>Duración</h2>
                        <p>{carrera?.duracion}</p>
                      </div>
                      <div className={styles.item}>
                        <h2>Inversión</h2>
                        <p>
                          {formatearDinero(carrera?.informacion?.inversion)} por
                          ciclo
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className={styles.sglider_contenedor}>
                  <h2>Imagenes Previas</h2>
                  <div className={styles.sglider}>
                    {carrera?.informacion?.imagenes
                      ? carrera?.informacion?.imagenes?.map((item) => (
                          <Image
                            onClick={() => handleVista(item.imagen)}
                            key={item.id}
                            layout="responsive"
                            width={300}
                            height={200}
                            src={item.imagen}
                            alt={"carrera"}
                            role="button"
                          />
                        ))
                      : "Cargando..."}
                  </div>
                </section>
              </div>

              {Object.values(carrera).length > 0 ? (
                <MallaCurricular data={carrera} />
              ) : (
                "Cargando.."
              )}
            </>
          )}
        </section>

        <Informate bg={"/fondo1.webp"}>
          <h2 className="titulo">Postula hoy mismo</h2>
          <p className="parrafo">
            La primera tarea de la educación es agitar la vida, pero dejarla
            libre para que se desarrolle. Tu futuro esta en tus manos, Comieza
            hoy a ser parte de esta gran institución, Brindandote enseñanza de
            calidad.
          </p>
          <Link href={"/contacto"}>
            <a className="boton">Postular</a>
          </Link>
        </Informate>

        <section className="max">
          <Requisitos />
        </section>
      </div>
    </Layout>
  );
}

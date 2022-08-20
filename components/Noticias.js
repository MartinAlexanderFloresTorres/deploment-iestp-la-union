import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import styles from "../styles/Noticias.module.css";

export default function Noticias() {
  return (
    <section className="py-5 mb-5">
      <div className="text-center mb-5">
        <h2 className="text-dark fs-3">De las noticias</h2>
        <h3 className="fs-1 fw-bolder fs-2">Ultimas Noticias</h3>
      </div>
      <Row xs={1} md={2} className="g-3">
        <Col>
          <div className={styles.item}>
            <Image
              width={400}
              height={300}
              layout="responsive"
              src="/img/noticias/noticia1.jpg"
              alt="noticia"
            />
            <div className={styles.info}>
              <a href="#" className={styles.boton}>
                Postulantes
              </a>
              <div>
                <p>RESULTADOS EXAMEN DE ADMISIÓN 2022.</p>
                <p className={styles.fecha}>10 de marzo del 2022</p>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.item}>
            <Image
              width={400}
              height={300}
              layout="responsive"
              src="/img/noticias/noticia2.jpg"
              alt="noticia"
            />
            <div className={styles.info}>
              <a href="#" className={styles.boton}>
                Admisión
              </a>
              <div>
                <p>Admisión 2022.</p>
                <p className={styles.fecha}>05 de enero del 2022</p>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.item}>
            <Image
              width={400}
              height={300}
              layout="responsive"
              src="/img/noticias/noticia3.jpg"
              alt="noticia"
            />
            <div className={styles.info}>
              <a href="#" className={styles.boton}>
                Carreras
              </a>
              <div>
                <p>Conoce nuestras carreras de contabilidad</p>
                <p className={styles.fecha}>8 de febrero del 2022</p>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.item}>
            <Image
              width={400}
              height={300}
              layout="responsive"
              src="/img/noticias/noticia1.jpg"
              alt="noticia"
            />
            <div className={styles.info}>
              <a href="#" className={styles.boton}>
                Certificacion y Titulos
              </a>
              <div>
                <p>
                  Reunion sobre el tema de certificados y titulos para los
                  estudiantes.
                </p>
                <p className={styles.fecha}>29 de mayo del 2022</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { atencion } from "../helpers";
import useCarreras from "../hooks/useCarreras";

const Footer = () => {
  const [despegable, setDespegable] = useState(false);
  const [email, setEmail] = useState("");
  const [cargando, setCargando] = useState("");

  const { enlaces } = useCarreras();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email != "") {
      setCargando(true);
      setTimeout(() => {
        setEmail("");
        setCargando(false);
      }, 3000);
    }
  };

  const despeglar = (e) => {
    e.target.parentElement.classList.toggle("active");
    setDespegable(!despegable);
  };
  return (
    <footer className={styles.footer}>
      <section className="max">
        <div className={styles.suscripcion}>
          <h2>Contactanos</h2>
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              required
              disabled={cargando}
              onChange={(e) => setEmail(e.target.value.trimStart())}
              placeholder="ingrese su email"
              type="email"
            />
            <input
              className="btn button"
              disabled={cargando}
              type="submit"
              value={cargando ? "Enviando..." : "suscribirte"}
            />
          </form>
        </div>
        <div className={styles.contenido}>
          <div className={styles.top}>
            <h2 className={styles.logo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-school"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
              </svg>
              <span>IESTP LA UNION</span>
            </h2>

            <ul className={styles.item}>
              <li className={styles.despegable} onClick={(e) => despeglar(e)}>
                <h2 className={styles.titulo}>Programas De Estudios</h2>
                <div className="iconos-despegables">
                  <svg
                    className="w-6 h-6 menos"
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6 mas"
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </li>
              {enlaces.length > 0 ? (
                enlaces.map((item) => (
                  <li key={item.id}>
                    <Link href={`/carreras/${item.url}`}>
                      <a className={styles.link}>{item.nombre}</a>
                    </Link>
                  </li>
                ))
              ) : (
                <p className={styles.link}>Cargando...</p>
              )}
            </ul>
            <ul className={styles.item}>
              <li className={styles.despegable} onClick={(e) => despeglar(e)}>
                <h2 className={styles.titulo}>Soporte</h2>
                <div className="iconos-despegables">
                  <svg
                    className="w-6 h-6 menos"
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6 mas"
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </li>
              <li>
                <Link href="/preguntas">
                  <a className={styles.link}>Preguntas Frecuentes</a>
                </Link>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="#"
                  /* target={"_blank"}
                  rel="noreferrer" */
                >
                  Libro De Reclamaciones
                </a>
              </li>
              <li>
                <Link href={"/contacto"}>
                  <a className={styles.link}>Atencion Al Estudiante</a>
                </Link>
              </li>
            </ul>
            <ul className={styles.item}>
              <li className={styles.despegable} onClick={(e) => despeglar(e)}>
                <h2 className={styles.titulo}>Ubicanos</h2>
                <div className="iconos-despegables">
                  <svg
                    className="w-6 h-6 menos"
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6 mas"
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://goo.gl/maps/visY3CHXaeEynGNz8"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Calle Sinchi Roca S/N La Unión - Piura
                </a>
              </li>
              <li>
                <a className={styles.link} href="tel:073-515755">
                  Tel: 073-515755
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              Copyright ©2022 | Todo los derechos reservados
            </p>
            <div className={styles.iconos}>
              <a href="#" title="facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-facebook"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
              <a href="#" title="instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-instagram"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>
              <a href="#" title="whatsapp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-whatsapp"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
              </a>
              <a href="#" title="Gmail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail"
                  width="44"
                  height="44"
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
              </a>
            </div>
            <div className={styles.botones}>
              <div className={styles.estado}>
                Instituto:{" "}
                <div>
                  <span
                    style={{
                      background: `${
                        atencion() ? "rgb(31, 190, 66)" : "#ff5b6b"
                      }`,
                    }}
                  ></span>{" "}
                  {atencion() ? "Abierto" : "Cerrado"}
                </div>
              </div>
              <Link href={"/admision"}>
                <a className={`btn btn-primary d-block ${styles.estado}`}>
                  Postula Ahora
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { pathname } = useRouter();

  const handleClose = () => setMenu(false);
  const handleMenu = () => setMenu(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <header
      className={`${
        scroll ? `${styles.activo} ${styles.header} ` : styles.header
      }`}
    >
      <section className={styles.contenedor}>
        <Link href="/">
          <a className={styles.logo}>IESTP</a>
        </Link>
        <nav className={styles.navegacion}>
          <Link href="/">
            <a
              className={`${
                pathname === "/"
                  ? `${styles.active} ${styles.link}`
                  : styles.link
              }`}
            >
              <span>Inicio</span>
            </a>
          </Link>
          <Link href="/carreras">
            <a
              className={`${
                pathname === "/carreras"
                  ? `${styles.active} ${styles.link}`
                  : styles.link
              }`}
            >
              <span>Carreras</span>
            </a>
          </Link>
          <Link href="/admision">
            <a
              className={`${
                pathname === "/admision"
                  ? `${styles.active} ${styles.link}`
                  : styles.link
              }`}
            >
              <span>Admision</span>
            </a>
          </Link>
          <Link href="/nosotros">
            <a
              className={`${
                pathname === "/nosotros"
                  ? `${styles.active} ${styles.link}`
                  : styles.link
              }`}
            >
              <span>Nosotros</span>
            </a>
          </Link>
          <Link href="/contacto">
            <a
              className={`${
                pathname === "/contacto"
                  ? `${styles.active} ${styles.link}`
                  : styles.link
              }`}
            >
              <span>Contactanos</span>
            </a>
          </Link>
          <Link href="/preguntas">
            <a
              className={`${
                pathname === "/preguntas"
                  ? `${styles.active} ${styles.link}`
                  : styles.link
              }`}
            >
              <span>FAQ</span>
            </a>
          </Link>
        </nav>

        <button
          title="Menu"
          variant="primary"
          className={styles.menu}
          onClick={handleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        <Offcanvas show={menu} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton className="p-4">
            <Offcanvas.Title>IESTP</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-4">
            <nav className={styles.subNavegacion}>
              <Link href="/">
                <a
                  onClick={() => setMenu(false)}
                  className={`${pathname === "/" ? styles.active : ""}`}
                >
                  <span>Inicio</span>
                </a>
              </Link>
              <Link href="/carreras">
                <a
                  onClick={() => setMenu(false)}
                  className={`${pathname === "/carreras" ? styles.active : ""}`}
                >
                  <span>Carreras</span>
                </a>
              </Link>
              <Link href="/admision">
                <a
                  onClick={() => setMenu(false)}
                  className={`${pathname === "/admision" ? styles.active : ""}`}
                >
                  <span>Admision</span>
                </a>
              </Link>
              <Link href="/nosotros">
                <a
                  onClick={() => setMenu(false)}
                  className={`${pathname === "/nosotros" ? styles.active : ""}`}
                >
                  <span>Nosotros</span>
                </a>
              </Link>
              <Link href="/contacto">
                <a
                  onClick={() => setMenu(false)}
                  className={`${pathname === "/contacto" ? styles.active : ""}`}
                >
                  <span>Contactanos</span>
                </a>
              </Link>
              <Link href="/preguntas">
                <a
                  onClick={() => setMenu(false)}
                  className={`${
                    pathname === "/preguntas" ? styles.active : ""
                  }`}
                >
                  <span>Preguntas Frecuentes</span>
                </a>
              </Link>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </header>
  );
}

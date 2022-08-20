import styles from "../styles/Informate.module.css";

export default function Informate({ children, bg }) {
  return (
    <section className={styles.fondo} style={{ backgroundImage: `url(${bg})` }}>
      <div className="max contenido">{children}</div>
    </section>
  );
}

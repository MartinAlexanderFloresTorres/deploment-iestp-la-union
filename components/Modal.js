import styles from "../styles/Modal.module.css";

export default function Modal({ children, setEstado }) {
  return (
    <section
      className={`modal ${styles.modal}`}
      onClick={(e) => e.target.classList.contains("modal") && setEstado(false)}
    >
      <div>{children}</div>
    </section>
  );
}
Modal.defaultProps = {
  setEstado: () => {},
};

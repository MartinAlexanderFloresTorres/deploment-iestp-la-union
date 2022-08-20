import styles from "../styles/Banner.module.css";

export default function Banner({ children, bg, clase }) {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className={`${styles.banner} ${clase}`}
    >
      <div className="max">{children}</div>
    </section>
  );
}
Banner.defaultProps = {
  clase: "",
};

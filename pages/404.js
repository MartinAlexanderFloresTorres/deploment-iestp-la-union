import Banner from "../components/Banner";
import Layout from "../layout/Layout";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <Layout pagina={"Pagina no encontrada"}>
      <Banner bg={"/img/carreras/arquitectura-8.webp"} clase={"overlay page-notFound"}>
        <div className="text-center notFound">
          {<h1 className="fw-bold text-white">404</h1>}
          <p className="text-white fw-bold fs-3">
            Lo sentimos, la página que buscas no existe
          </p>
          <h2 className="text-white fw-semibold fs-6">
            Prueba con estas opciones y conoce nuestras paginas:
          </h2>
          <div className="d-flex gap-3 aling-items-center justify-content-center flex-wrap">
            <Link href={"/admision"}>
              <a className="btn btn-primary px-5 py-2">Admisión</a>
            </Link>
            <Link href={"/"}>
              <a className="btn btn-primary px-5 py-2">Inicio</a>
            </Link>
            <Link href={"/carreras"}>
              <a className="btn btn-primary px-5 py-2">Carreras</a>
            </Link>
          </div>
          <div className="nofound_icono">
            <Image src={"/error-404.webp"} width={200} height={200} alt="404" />
          </div>
        </div>
      </Banner>
      <section className="text-center px-3">
        <Image src={"/svg/teletransportacion.svg"} width={1000} height={1000} alt="404" />
      </section>
    </Layout>
  );
}

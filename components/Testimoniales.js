import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "../styles/Testimoniales.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Estrellas from "./Estrellas";
import { estudiantes } from "../data/estudiantes";

export default function Testimoniales() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
  };

  return (
    <section className="py-5 mb-5">
      <div className="text-center mb-5">
        <h3 className="text-dark">Retroalimentación</h3>
        <h2 className="fs-1 fw-bolder">Lo que los estudiantes dicen</h2>
      </div>

      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={3}
          navigation={true}
          breakpoints={breakpoints}
          modules={[Navigation]}
          className={`mySwiper ${styles.swiper}`}
        >
          {estudiantes.length > 0 &&
            estudiantes.map((item) => (
              <SwiperSlide key={item.id}>
                <Card className={styles.item}>
                  <Card.Body>
                    <Card.Img
                      src={item.imagen}
                      alt="estudiante"
                      style={{ height: 80, width: 80, objectFit: "cover" }}
                    />
                    <Card.Title className="fw-bold pt-1">
                      {item.nombre}
                    </Card.Title>
                    <span className="fw-normal text-muted">
                      {item.apellidos}
                    </span>
                    <Card.Text className="pt-2">{item.comentario}</Card.Text>
                    <Estrellas />
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

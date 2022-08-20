import { Card, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

export default function Baneficios() {
  return (
    <Row className="align-items-center py-5 ">
      <Col className="mb-5 mb-lg-0 text-center">
        <h2 className="text-secondary fs-3">
          Beneficios, Facilidades y Oportunidades
        </h2>
        <h3 style={{ maxWidth: "700px" }} className="fw-bold mx-auto fs-2">
          Ofrecemos lo mejor para nuestros estudiantes
        </h3>
        <div className="py-5">
          <Row className="g-5 overflow-hidden">
            <Col>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/beneficios.svg"
                      alt="beneficios"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold text-primary mb-0">
                        Beneficios
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/alcancia.svg"
                      alt="alcancia"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Educacion gratuita, no se pagan mensualidades.
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/titulo.svg"
                      alt="titulo"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Titulo Profesional Técnico a nombre de la nación.
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/estudiantes.svg"
                      alt="estudiantes"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Clases semi presenciales.
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/profesor.svg"
                      alt="profesor"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Docentes altamente capacidados
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/job.svg"
                      alt="job"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Mejorar la empleabilidad de los estudiantes.
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/cv.svg"
                      alt="cv"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Crear un currículo escolar más placentero
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/logros.svg"
                      alt="logros"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Enseñanza Modular
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/educacion.svg"
                      alt="educacion"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Formación
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/informes.svg"
                      alt="informes"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Preparación de informes
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/equipo.svg"
                      alt="equipo"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Habilidades de trabajo en equipo
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Col>

            <Col>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/facilidades.svg"
                      alt="facilidades"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold text-primary mb-0">
                        Facilidades
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/biblioteca.svg"
                      alt="biblioteca"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Biblioteca virtual
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/laboratorio-aliens.svg"
                      alt="laboratorio"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Laboratorios
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/mundo.svg"
                      alt="mundo"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Acceso a internet
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/computacion.svg"
                      alt="computacion"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Salas de computo
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/comedor.svg"
                      alt="comedor"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Comedores
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Col>

            <Col>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/oportunidades.svg"
                      alt="oportunidades"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold text-primary mb-0">
                        Oportunidades
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/titulo.svg"
                      alt="titulo"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Titulo al nombre de la nación
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/universidades.svg"
                      alt="universidades"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Convenios con universidades
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/ofertas.svg"
                      alt="ofertas"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Ofertas Laborales
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/job.svg"
                      alt="job"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Entrevistas y Trabajos
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/productividad.svg"
                      alt="productividad"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Productividad economica
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="shadow-sm border-light pt-4">
                    <Card.Img
                      style={{ height: 180 }}
                      variant="top"
                      src="/svg/crecimiento.svg"
                      alt="crecimiento"
                    />
                    <Card.Body className="d-flex align-items-center text-center justify-content-center">
                      <Card.Title className="fw-bold mb-0 text-primary">
                        Crecimiento económico
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

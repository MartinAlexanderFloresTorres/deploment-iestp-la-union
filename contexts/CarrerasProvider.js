import { createContext, useState, useEffect } from "react";
import { carreras as data } from "../data/carreras";
import { handleBody } from "../helpers";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const CarrerasContext = createContext();

const CarrerasProvider = ({ children }) => {
  const [carreras, setCarreras] = useState([]);
  const [enlaces, setEnlaces] = useState([]);
  const [boton, setBoton] = useState(false);

  useEffect(() => {
    handleBody(boton);
  }, [boton]);

  // consultar las carreras
  const consultarCarreras = () => {
    setCarreras(data);
    const resultado = data.map((item) => {
      return { id: item.id, nombre: item.nombre, url: item.url };
    });
    setEnlaces(resultado);
  };

  useEffect(() => {
    consultarCarreras();
  }, []);

  // enviar datos del formulario
  const handleEnviarFormulario = async (datos) => {
    try {
      await emailjs.sendForm(
        "service_l9tp8h2",
        "template_9pkwy9t",
        datos,
        "qvDUZguEvOykHjvCD"
      );

      Swal.fire("Enviado Correctamente", "Lo contactaremos pronto.", "success");
    } catch (error) {
      console.log(error.text);
      Swal.fire("Error", "Algo salio mal, Intente nuevamente.", "success");
    }
  };
  return (
    <CarrerasContext.Provider
      value={{
        carreras,
        enlaces,
        boton,
        setBoton,
        handleEnviarFormulario,
      }}
    >
      {children}
    </CarrerasContext.Provider>
  );
};
export { CarrerasProvider };
export default CarrerasContext;

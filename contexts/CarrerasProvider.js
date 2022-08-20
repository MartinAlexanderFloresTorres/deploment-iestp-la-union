import { createContext, useState, useEffect } from "react";
import { carreras as data } from "../data/carreras";
import { handleBody } from "../helpers";

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // aqui enviar por metodo post los datos hacia una api de mensajeria (email)
        resolve();
        /* reject(false) */
      }, 3000);
    });
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

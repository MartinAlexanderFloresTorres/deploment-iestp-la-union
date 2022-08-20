/**
 *
 * @param {*} atencion
 * @returns boolean
 */
export const atencion = () => {
  const hora = new Date().getHours();
  return hora >= 8 && hora <= 14;
};

/**
 *
 * @param {*} cantidad
 * @returns money
 */
export const formatearDinero = (cantidad = 0) => {
  return cantidad.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
  });
};

/**
 *
 * @returns year
 */
export const getYear = () => {
  return new Date().getFullYear();
};

export const handleBody = (estado = false) => {
  const body = document.querySelector("body");
  if (estado) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
};

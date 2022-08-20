import { useContext } from "react";
import CarrerasContext from "../contexts/CarrerasProvider";

const useCarreras = () => {
  return useContext(CarrerasContext);
};

export default useCarreras;

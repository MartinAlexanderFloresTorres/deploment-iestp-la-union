import { useState, useRef } from "react";
import { Button, Form, Row, Alert } from "react-bootstrap";
import useCarreras from "../hooks/useCarreras";

export default function Formulario() {
  const [campos, setCampos] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    carrera: "",
    mensaje: "",
  });
  const [alerta, setAlerta] = useState({ tipo: "", msg: "" });
  const [terminos, setTerminos] = useState(false);
  const [cargando, setCargando] = useState(false);

  const form = useRef();

  const { handleEnviarFormulario, setBoton } = useCarreras();

  const handleChange = (e) => {
    setCampos({ ...campos, [e.target.name]: e.target.value.trimStart() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(campos).includes("")) {
      setAlerta({
        ...alerta,
        tipo: "danger",
        msg: "Todo los campos son obligatorios",
      });
    } else if (!terminos) {
      setAlerta({
        ...alerta,
        tipo: "danger",
        msg: "Por favor acepte los terminos y condiciones",
      });
    } else {
      // enviar formulario

      setAlerta({ tipo: "", msg: "" });
      setCargando(true);
      await handleEnviarFormulario(form.current);
      // eliminar los campos
      setCampos({
        nombre: "",
        apellidos: "",
        email: "",
        carrera: "",
        mensaje: "",
      });
      setTerminos(false);
      setBoton(false);

      // eliminar las alertas
      setCargando(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} ref={form}>
      <span className="fs-1 fw-bold text-primary">Contacto</span>
      <legend className="fs-5 fw-bold pb-3 text-secondary">
        Comienza tu futuro ahora
      </legend>
      {alerta?.msg && (
        <Alert className="text-center" variant={alerta.tipo}>
          {alerta.msg}
        </Alert>
      )}
      <Row className="mb-3">
        <Form.Group
          className="col-sm-6 mb-sm-0 mb-3"
          controlId="formGridNombre"
        >
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            disabled={cargando}
            placeholder="Escribe tu nombre"
            name="nombre"
            value={campos.nombre}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="col-sm-6" controlId="formGridApellidos">
          <Form.Label>Apellidos Completo</Form.Label>
          <Form.Control
            disabled={cargando}
            placeholder="Escribe tus apellidos"
            name="apellidos"
            value={campos.apellidos}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          disabled={cargando}
          type="email"
          placeholder="Escriba su email"
          name="email"
          value={campos.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridCarrera">
        <Form.Label>Carrera</Form.Label>
        <Form.Select
          disabled={cargando}
          name="carrera"
          value={campos.carrera}
          onChange={handleChange}
        >
          <option value="">Elije una Carrera</option>
          <option value="Arquitectura De Plataformas Y Servicios De TI">
            Arquitectura De Plataformas Y Servicios De TI
          </option>
          <option value="Administración De Negocios">
            Administración De Negocios
          </option>
          <option value="Electrónica Industrial">Electrónica Industrial</option>
          <option value="Enfermeria Tecnica">Enfermeria Tecnica</option>
          <option value="Agropecuarios">Agropecuarios</option>
          <option value="Contabilidad">Contabilidad</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridMensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          disabled={cargando}
          as="textarea"
          rows={5}
          style={{ maxHeight: 200 }}
          name="mensaje"
          value={campos.mensaje}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridCheckbox">
        <Form.Check
          disabled={cargando}
          checked={terminos}
          onChange={() => setTerminos(!terminos)}
          type="checkbox"
          label="Acepto los términos y condiciones"
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={cargando}>
        {cargando ? "Enviando Informacion..." : "Recibir Información"}
      </Button>
    </Form>
  );
}

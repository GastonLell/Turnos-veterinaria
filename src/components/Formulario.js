import React, { useState } from "react";
import PropTypes from 'prop-types';

import {v4 as uuidv4} from 'uuid'
import {
  Text,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import InputField from "./InputField";

const Formulario = ({agregarCita}) => {
  //estado para la cita guaardada
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  //extraer valores de estado para agregarlos como valor a los inputs
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //estado validaciones form
  const [error, setError] = useState(false);

  //tomando el valor de inputs
  const handleChange = (e) => {
    e.preventDefault();
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //enviando formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true)
      return;
    }

    //por si el usuario completa los campos vacios
    setError(false)

    //generar id para cita
    cita.id = uuidv4();

    //agregar cita a mi lista
    agregarCita(cita)

    // reiniciar formulario
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    })
  };

  return (
    <Stack bg="transparent" borderRadius={5}>
      <Text  textColor="whitesmoke" fontSize="4xl" pb={3} m="auto">
        Crear cita
      </Text>
      {
        error && (
          <Text  fontSize="xl" color="red" pb={1}>Todos los campos son obligatorios</Text>
        )
      }
      <form onSubmit={handleSubmit}>
        <InputField
          value={mascota}
          onChange={handleChange}
          type="text"
          text="Nombre masscota"
          name="mascota"
        />
        <InputField
          value={propietario}
          onChange={handleChange}
          type="text"
          text="Nombre dueño"
          name="propietario"
        />
        <InputField
          value={fecha}
          onChange={handleChange}
          type="date"
          text="Fecha"
          name="fecha"
        />
        <InputField
          value={hora}
          onChange={handleChange}
          type="time"
          text="hora"
          name="hora"
        />

        <FormControl pb={{ base: "3", md: "5" }}>
          <FormLabel textColor="whitesmoke">Síntomas</FormLabel>
          <Textarea
            value={sintomas}
            onChange={handleChange}
            size="sm"
            name="sintomas"
            bg="whitesmoke"
          />
        </FormControl>

        <Button colorScheme="blackAlpha" variant="solid" type="submit" w="100%">
          Agrergar
        </Button>
      </form>
    </Stack>
  );
}

Formulario.propTypes = {
  agregarCita: PropTypes.func.isRequired
}

export default Formulario;
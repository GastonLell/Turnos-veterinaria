import { Stack, Wrap, Text } from "@chakra-ui/react";
import TarjetaCita from "./TarjetaCita";
import PropTypes from "prop-types";

const ListaCitas = ({ citas, eliminarCita }) => {
  const titulo = citas.length === 0 ? "No hay citas" : "Administrar Citas";
  return (
    <Stack>
      <Text m="auto" textColor="whitesmoke" fontSize="4xl" pb={3}>
        {titulo}{" "}
      </Text>
      <Wrap spacing={6}>
        {citas.map((cita) => (
          <TarjetaCita {...cita} key={cita.id} eliminarCita={eliminarCita} />
        ))}
      </Wrap>
    </Stack>
  );
};

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default ListaCitas;

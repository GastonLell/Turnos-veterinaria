import { Stack, Text, Button } from "@chakra-ui/react"
import PropTypes from 'prop-types';

const TarjetaCita = ({id, mascota, propietario, fecha, hora, sintomas, eliminarCita}) => {
    return (
        <Stack bg="whitesmoke" p={3} borderRadius={5} w={{base: "100%", md: "300px"}}>

            <Text fontSize="xl"><span style={{"fontWeight": "bold"}}>Mascota: </span>{mascota}</Text>
            <Text fontSize="xl"><span style={{"fontWeight": "bold"}}>Propietario: </span>{propietario}</Text>
            <Text fontSize="xl"><span style={{"fontWeight": "bold"}}>Fecha: </span>{fecha}</Text>
            <Text fontSize="xl"><span style={{"fontWeight": "bold"}}>Hora: </span>{hora}</Text>
            <Text fontSize="xl"><span style={{"fontWeight": "bold"}}>Síntomas: </span>{sintomas}</Text>

            <Button       
                w="100%"
                mt={3}
                colorScheme="purple"
                variant="solid"
                onClick={() => eliminarCita(id)}
            >Eliminar &times;</Button>

        </Stack>
    )
}

TarjetaCita.propTypes = {
    id: PropTypes.string.isRequired,
    mascota: PropTypes.string.isRequired,
    propietario: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
    eliminarCita: PropTypes.func.isRequired,
}

export default TarjetaCita;
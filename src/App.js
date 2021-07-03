import { useEffect, useState } from "react";
import { ChakraProvider, Stack, Text } from "@chakra-ui/react";

import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";


function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))

  if(!citasIniciales){
    citasIniciales = [];
  }

  //estado de la App ya que es chica
  const [citas, setCitas] = useState(citasIniciales);

  //agregar citas a mi estado
  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    setCitas(nuevasCitas)
  }

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))

    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

  return (
    <ChakraProvider>

      <Stack bgGradient="linear(to-l, #333 , #7928CA)" h="auto">

        <Text  textColor="whitesmoke" fontSize="4xl" textAlign="center" p={3}>
          ADMINISTRADOR DE PACIENTES
        </Text>

        <Stack p={20} direction={{base: "column", md: "row"}} justifyContent="space-between" spacing={6}>

          <Stack w={{ base: "100%", md: "50%" }}>
            <Formulario agregarCita={agregarCita} />
          </Stack>

          <Stack w={{ base: "100%", md: "50%" }}>
            <ListaCitas citas={citas} eliminarCita={eliminarCita} />
          </Stack>

        </Stack>
      </Stack>
    </ChakraProvider>
  );
}

export default App;

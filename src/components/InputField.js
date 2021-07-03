import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputField = ({ type, text, name, handleChange, ...props }) => {

  return (
    <FormControl pb={{ base: "3", md: "6" }}>

      <FormLabel textColor="whitesmoke">{text}</FormLabel>

      <Input {...props} type={type} name={name} bg="whitesmoke" />
      
    </FormControl>
  );
};
export default InputField;

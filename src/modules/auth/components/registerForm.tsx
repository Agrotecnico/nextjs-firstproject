import { FC } from "react";
import { useForm } from "react-hook-form";
/* import { useSignupMutation } from "@hooks"; */
import {
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import { EMAIL_REGEX } from "../../../lib/util/validations";

const RegisterForm = ({ toggleRegisterForm }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  /* const { signup, loading } = useSignupMutation(); */

  const onSubmit = async (data) => {
    /* signup({ variables: { input: data } }); */
  };

  return (
    <>
      <Text as="h1" fontSize="22px" fontWeight="semibold" color="#01124188" mb={8} mt='16px'>
        Registro
      </Text>
      <form
        id="signup-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
      >
        <VStack spacing={4} mb='16px' >
          <FormControl isRequired isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="name">E-mail</FormLabel>
            <Input
              id="email"
              placeholder="E-mail"
              {...register("email", {
                required: "",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "El formato del email es incorrecto",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={Boolean(errors.password)}>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
              id="password"
              placeholder="******"
              type="password"
              {...register("password", {
                required: '',
                minLength: 8,
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="password">Nombre</FormLabel>
            <Input
              id="name"
              placeholder="Juan Carlos"
              {...register("name", { required: "Este campo es requerido" })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.lastName)}>
            <FormLabel htmlFor="password">Apellido</FormLabel>
            <Input
              id="lastName"
              placeholder="Perez"
              {...register("lastName", { required: "Este campo es requerido" })}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>

          <Flex mt={4} alignItems="center" alignSelf="end">
            {/* {loading && <CircularProgress size={6} isIndeterminate />} */}
            <Button
              type="button"
              onClick={toggleRegisterForm}
              variant="link"
              mx={4}
              textDecor='none'
              _hover={{color:'#011241'}}
            >
              Iniciar sesión
            </Button>
            <Button
              /* type="submit" */
              form="signup-form"
              variant="solid"
              colorScheme="teal"
              borderRadius={'xl'}
            >
              Confirmar
            </Button>
          </Flex>
        </VStack>
      </form>
    </>
  );
};

export default RegisterForm;
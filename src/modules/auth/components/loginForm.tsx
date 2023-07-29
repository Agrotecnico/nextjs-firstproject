import { useForm } from "react-hook-form";
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

const LoginForm = ({ toggleLoginForm }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          email: "",
          password: "",
        },
        mode: "onBlur",
      });

  const onSubmit = async (data) => {
    const { email, password } = data;
    /* login({ variables: { input: { email, password } } }); */
  };

  return (
    <>
      <Text as="h1" fontSize="22px" fontWeight="semibold" color="#01124188" mb={8} mt='16px'>
        Iniciar Sesión
      </Text>

      <form
        id="login-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
      >
        <VStack spacing={4} mb='16px'>
          <FormControl isRequired isInvalid={Boolean(errors.email)}>
            <FormLabel 
              htmlFor="name"
              color='#011241dd' >
                E-mail
            </FormLabel>
            <Input
              id="email"
              placeholder= "E-mail"
              {...register("email", {
                required: "",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Formato incorrecto",
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
                required: "",
                minLength: 8,
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <Flex alignItems="center" alignSelf="end">
            {/* {loading && <CircularProgress size={6} isIndeterminate />} */}

            <Button
              type="button"
              onClick={toggleLoginForm}
              variant="link"
              mx={4}
              textDecor='none'
              _hover={{color:'#011241'}}
            >
              Registrarme
            </Button>
            <Button
              type="submit"
              form="login-form"
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

export default LoginForm;
import { Button, Text, Container, Box, Flex, Link,  } from "@chakra-ui/react"
import Head from "next/head"
import { useState } from "react"

import { AgroLogo } from "../../../../public/icons/AgroLogo/agroLogo"
import  LoginForm  from "../../../modules/auth/components/loginForm"
import  RegisterForm  from "../../../modules/auth/components/registerForm"
import  {BaseCard}  from "../../../components/baseCard"


function AuthTemplate() {

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (

    <>
      <Head>
        <title>Ingresar | Vission</title>
        <meta
          name="login page"
          content="Inicia sesion o registrate en el sistema de gestion de opticas mas eficiente del mercado."
        />
      </Head>

      <Flex  direction={'column'} justify='space-between' w={'full'} h='100vh' bg={'#7b8a8b33'} color='#011241' /**/  >
        <Box bg={'#7b8a8b'} w='full' borderBottom={'3px solid #596666'} >
          <Flex  maxW='768px' m='0 auto'
            w={'full'} 
            bg='#7b8a8b' 
            justifyContent='flex-start' h={'56px'} 
            alignItems={'center'} >
            <Link href='/' p={'10px 12px'} >
              <AgroLogo fill="#ffffffdd" h={10} mb={0} />
            </Link>
            <Text mb={0} color={'white'} fontSize={'24px'}>AgRo</Text>
          </Flex>
        </Box>
        <Container
          mb={{base:'16px', sm:'96px'}}
          mt='16px'
          justifyContent="center"
          display="flex"
          flexDirection="column"
          pos={'relative'}
          >
           <BaseCard>
            {showRegisterForm ? (
              <RegisterForm toggleRegisterForm={toggleRegisterForm} />
            ) : (
              <LoginForm toggleLoginForm={toggleRegisterForm} />
            )}
          </BaseCard> {/**/}
        </Container>
        <Flex 
          w={'full'} 
          bg='#ffffff66'
          justifyContent='center' h={'56px'} 
          borderTop='1px solid #01124119'
          alignItems={'center'} >
          <Link href='/' p={'10px 12px'} >
            <AgroLogo fill='#7b8a8b' h={8} mb={0} />
          </Link>
        </Flex>
      </Flex>
    
    </>
  )
}

export default AuthTemplate

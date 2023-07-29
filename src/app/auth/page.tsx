'use client'

import AuthTemplate from "../../modules/auth/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping Bag",
  description: "View your shopping bag",
}

export default function Auth() {
  return <AuthTemplate />
}

/* import { Button, Text, Container, Box, Flex, Link } from "@chakra-ui/react"
import Head from "next/head";

import { AgroLogo } from "../../../public/icons/AgroLogo/agroLogo";
import { Bellota_Text } from "next/font/google";


function AuthPage() {
  return (

    <>
      <Head>
        <title>Ingresar | Vission</title>
        <meta
          name="login page"
          content="Inicia sesion o registrate en el sistema de gestion de opticas mas eficiente del mercado."
        />
      </Head>

      <Flex direction={'column'} justify='space-between' w={'full'} h='100vh' bg={'#0112411b'} color='#011241'  >
        <Box bg={'#011241'} w='full' borderBottom={'3px solid #ef2a82'} >
          <Flex  maxW='1154px' m='0 auto'
            w={'full'} 
            bg='#011241' 
            justifyContent='flex-start' h={'56px'} 
            alignItems={'center'} >
            <Link href='/' p={'10px 12px'} >
              <AgroLogo fill="#ffffffdd" h={12} mb={0} />
            </Link>
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
          <Button>
            polo
          </Button>

        </Container>
        <Flex 
          w={'full'} 
          bg='#ffffff66'
          justifyContent='center' h={'56px'} 
          borderTop='1px solid #01124119'
          alignItems={'center'} >
          <Link href='/' p={'10px 12px'} >
            <AgroLogo fill="#011241dd" h={20} mb={0} />
          </Link>
        </Flex>
      </Flex>
    
    </>
  )
}

export default AuthPage
 */
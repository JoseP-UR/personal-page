import Head from 'next/head'
import Image from 'next/image'
import { Container, Center, Heading, Text } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'

export default function Home() {
  const bgColor = useColorModeValue('gray.200', 'gray.900')
  const textColor = useColorModeValue('gray.700', 'gray.100')
  return (
    <div>
      <Head>
        <title>Jose Paulo Urives</title>
        <meta name="description" content="My personal page" />\
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />\
      </Head>

      <Center paddingTop="4rem">

        <Container width="lg" bg={bgColor} color={textColor} borderRadius="15px" paddingBottom="2rem">
          <Heading as="h1" size="2xl" textAlign="center" paddingTop="2rem">
            Jose Paulo Urives
          </Heading>

          <Text textAlign="center" paddingTop="1rem">
            Full Stack Developer
          </Text>
        </Container>
      </Center>
    </div>
  )
}

export { getServerSideProps } from "../chakra"
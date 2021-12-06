import Head from 'next/head'
import SlideShow from '../components/slideShow'
import { Container, Center, Heading, Text, Link } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'

export default function Home() {
  const bgColor = useColorModeValue('gray.200', 'gray.900')
  const textColor = useColorModeValue('gray.700', 'gray.100')
  const slides = [
    {
      image: '/images/logo.png',
      title: 'Me',
      description: "I'm a developer based in Brazil.",
    },
    {
      image: '/images/beggining.png',
      title: 'Beggining',
      description: 'I first started programming in the early 2000s, when I was a teenager.',
    },
    {
      image: '/images/motivation.jpg',
      title: 'Motivation',
      description: "I started by learning Visual Basic and C++, with the sole purpose to make cheats for a computer game. This awoke my interest in programming and i've been playing with computer code ever since.",
    },
    {
      image: '/images/currently.jpg',
      title: 'Currently',
      description: (<span>I currently work as a full-stack developer at <Link href="https://www.neoassist.com/" target="_blank">NeoAssist</Link></span>),
    }
  ]
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
      <Heading as="h1" size="2xl" textAlign="center" paddingTop="2rem">
        About me
      </Heading>
      <SlideShow id="about" interval="5000" slides={slides} />
    </div>
  )
}

export { getServerSideProps } from "../chakra"
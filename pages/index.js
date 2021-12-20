import Head from 'next/head'
import SlideShow from '../components/slideShow'
import { Container, Center, Heading, Text, Link } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { WEBGL } from 'three/examples/jsm/WebGL.js';
import { useEffect, useRef } from 'react';
import { render } from 'react-dom';



export default function Home() {
  let cube = useRef(null);
  let renderer = useRef(null);
  let scene = useRef(null);
  let camera = useRef(null);
  const animate = () => {
    requestAnimationFrame(animate);
    cube.current.rotation.x += 0.01;
    cube.current.rotation.y += 0.01;
    renderer.current.render(scene.current, camera.current);
  };
  const renderScene = () => {
    scene.current = new Scene();
    renderer.current = new WebGLRenderer();
    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00FFFF });
    cube.current = new Mesh(geometry, material);
    camera.current = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const element = document.getElementById('gltests');
    scene.current.add(cube.current);

    camera.current.position.z = 5;
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.domElement.style.width = '100%';
    renderer.current.domElement.style.height = '100%';
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    element.appendChild(renderer.current.domElement);
    renderer.current.render(scene.current, camera.current);
    animate();
  }

  useEffect(renderScene, [])

  let initialPosition = {x: 0, y: 0}
  const drag = (e) => {
    cube.current.rotation.x += (initialPosition.y - e.screenY) * 0.00001;
    cube.current.rotation.y += (initialPosition.x - e.screenX) * 0.00001;
    renderer.current.render(scene.current, camera.current);
  }

  let draggable = false
  const toggleDrag = (direction) => {
    const activated = direction === 'down'
    return (e) => {
      draggable = activated
      console.log(draggable)

      if (activated) {
        initialPosition = { x: e.screenX, y: e.screenY }
        window.addEventListener('mousemove', drag)
        window.addEventListener('mouseup', upFunc)
        return
      }
      window.removeEventListener('mouseup', upFunc)
      window.removeEventListener('mousemove', drag)
    }
  }
  const upFunc = toggleDrag('up') // this is terrible and i cant think of a better solution yet
  const bgColor = useColorModeValue('gray.200', 'gray.900')
  const textColor = useColorModeValue('gray.700', 'gray.100')
  const slides = [
    {
      html: (<Container onMouseDown={toggleDrag('down')} id="gltests" height={"40vh"} width={'40vw'}>
      </Container>),
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
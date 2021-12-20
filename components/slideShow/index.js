import { Container, Box, Heading, Text } from "@chakra-ui/layout"
import { Img } from '@chakra-ui/image';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import style from "./SlideShow.module.css";
import { useAnimation } from "framer-motion";
import MotionBox from "../motionBox";

export default function SlideShow(props) {
    const bgColor = useColorModeValue('gray.200', 'gray.900')
    const slideBgColor = useColorModeValue('gray.300', 'gray.800')
    const fontColor = useColorModeValue('black', 'whiteAlpha.900')
    const slideFontColor = useColorModeValue('black', 'whiteAlpha.900')
    const [index, setIndex] = useState(0)
    const animationControls = useAnimation();
    const animateSlide = (forward = true) => {
        animationControls.start({
            x: 30 * (forward ? 1 : -1),
            transition: {
                duration: 0.05,
            },
        }).then(() => {
            animationControls.start({
                x: -30 * (forward ? 1 : -1),
                transition: {
                    duration: 0.05,
                },
            }).then(() => {
                animationControls.start({
                    x: 0,
                    transition: {
                        duration: 0.05,
                    },
                })
            })
        })
    }

    const navigateSlide = (forward = true) => {
        return () => {
            if (forward) {
                animateSlide()
                if (index < props.slides.length - 1) {
                    setIndex(index + 1)
                    return;
                }
                setIndex(0)
                return;
            }
            animateSlide(false)
            if (index > 0) {
                setIndex(index - 1)
                return;
            }
            setIndex(props.slides.length - 1)
        }
    }


    return (
        <Container
            minHeight="100vh"
            maxHeight="100vh"
            minW="98vw"
            maxW="98vw"
            p="0"
            id={props.id}
            className={style.slideShow}
        >
            <Box
                display="flex"
                flexWrap="nowrap"
                alignItems="center"
                flexDirection="row"
                p="4"
                bg={bgColor}
                color={fontColor}
                marginTop="4rem"
                marginBottom="4rem"
                minHeight="100vh"
                maxHeight="100vh"
                minW="98vw"
                maxW="98vw"
                justifyContent="space-between"
            >
                <ArrowBackIcon
                    flexBasis={["10%", "10%", "5%", "5%"]}
                    className={style.slideArrow}
                    onClick={navigateSlide(false)}
                    size="2xl"
                    color={fontColor}
                    cursor="pointer"
                    opacity={index === 0 ? 0.5 : 1}
                />
                {props.slides.map((slide, i) => {
                    return (
                        <MotionBox
                            key={i}
                            flexBasis={["50%", "50%", "80%", "80%"]}
                            display={index === i ? "flex" : "none"}
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="space-between"
                            bg={slideBgColor}
                            borderRadius="15px"
                            color={slideFontColor}
                            p="4"
                            minHeight={["60vh", "60vh", "80vh", "80vh"]}
                            maxHeight={["60vh", "60vh", "80vh", "80vh"]}
                            minW={["60vw", "60vw", "80vw", "80vw"]}
                            maxW={["60vw", "60vw", "80vw", "80vw"]}
                            opacity={i === index ? 1 : 0.5}
                            animate={animationControls}
                            initial={false}
                        >
                            {
                                (() => {
                                    if (slide.html) {
                                        return (<Box
                                            marginTop="4rem"
                                            flexBasis="80%"
                                            maxH="60vh"
                                            maxW="100vw"
                                            minW="60vw"
                                            minH="60vh"
                                            borderRadius="15px">{slide.html}</Box>)
                                    }
                                    return <Img

                                        src={slide.image}
                                        alt={slide.title}
                                        maxH="50vh"
                                        maxW="100vw"
                                        minW="50vw"
                                        minH="50vh"
                                        boxSize="70%"
                                        objectFit="contain"
                                        objectPosition="center"
                                        borderRadius="15px"
                                    />

                                })()
                            }

                            <Heading
                                flexBasis="10%"
                                as="h1"
                                size="2xl"
                                textAlign="center"
                                paddingTop="2rem"
                            >
                                {slide.title}
                            </Heading>
                            <Text
                                flexBasis="10%"
                                textAlign="center"
                                paddingBottom="2rem"
                            >
                                {slide.description}
                            </Text>
                        </MotionBox>
                    )
                })}
                <ArrowForwardIcon
                    flexBasis={["10%", "10%", "5%", "5%"]}
                    className={style.slideArrow}
                    onClick={navigateSlide()}
                    size="2xl"
                    color={fontColor}
                    cursor="pointer"
                    opacity={index === props.slides.length - 1 ? 0.5 : 1}
                />
            </Box>
        </Container>
    )
}
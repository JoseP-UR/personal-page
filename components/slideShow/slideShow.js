import { Container, Box, Heading, Text } from "@chakra-ui/layout"
import { Img } from '@chakra-ui/image';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function SlideShow(props) {
    const bgColor = useColorModeValue('gray.200', 'gray.900')
    const fontColor = useColorModeValue('black', 'whiteAlpha.900')
    const [index, setIndex] = useState(0)

    return (
        <Container margin="auto" maxW="lg">
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                p={4}
                bg={bgColor}
                color={fontColor}
                marginTop="4rem"
                marginBottom="4rem"
                minHeight="40vh"
                maxHeight="40vh"
            >
                <ArrowBackIcon
                    onClick={() => {
                        if (index > 0) {
                            setIndex(index - 1)
                            return;
                        }
                        setIndex(props.slides.length - 1)
                    }}
                    size="2xl"
                    color={fontColor}
                    cursor="pointer"
                    opacity={index === 0 ? 0.5 : 1}
                />
                <Box
                    flexBasis="90%"
                    key={index}
                    width="100%"
                    maxWidth="500px"
                    mx="auto"
                    p={4}
                    boxShadow="lg"
                    bg={bgColor}
                    color={fontColor}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    minHeight="35vh"
                    maxHeight="35vh"
                    justifyContent="space-between"
                >
                    <Img flexBasis="80%" src={props.slides[index].image} alt={props.slides[index].title} />
                    <Heading flexBasis="10%">{props.slides[index].title}</Heading>
                    <Text flexBasis="10%">{props.slides[index].description}</Text>
                </Box>
                <ArrowForwardIcon
                    onClick={() => {
                        if (index < props.slides.length - 1) {
                            setIndex(index + 1)
                            return;
                        }
                        setIndex(0)
                    }}
                    size="2xl"
                    color={fontColor}
                    cursor="pointer"
                    opacity={index === props.slides.length - 1 ? 0.5 : 1}
                />
            </Box>
        </Container>
    )
}
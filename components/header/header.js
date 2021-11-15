import { useState } from 'react';
import { Button } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { Link, Flex } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import { List, ListItem, ListIcon, Heading, Text } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon, CheckCircleIcon, ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons';
import style from './header.module.css'
import { useRouter } from 'next/dist/client/router';


export default function Header(props) {
    const bgColor = useColorModeValue('gray.200', 'gray.900')
    const fontColor = useColorModeValue('black', 'whiteAlpha.900')
    const { colorMode, toggleColorMode } = useColorMode()
    const [isOpen, setIsOpen] = useState(false)
    const [hovered, setHovered] = useState('')
    const router = useRouter();
    const handleToggle = () => setIsOpen(!isOpen)

    const menuItems = [
        {
            name: 'Home',
            href: '/',
            icon: router.pathname === '/' ? <CheckCircleIcon /> : <ArrowForwardIcon />
        },
        {
            name: 'About',
            href: '/about',
            icon: router.pathname === '/about' ? <CheckCircleIcon /> : <ArrowForwardIcon />
        },
        {
            name: 'Contact',
            href: '/contact',
            icon: router.pathname === '/contact' ? <CheckCircleIcon /> : <ArrowForwardIcon />
        },
    ];

    return (
        <Flex className="header" alignItems="center" height={props.height} boxShadow="base" position="fixed" width="100%" bg={bgColor}>
            <Flex marginLeft="10px" flexBasis="30%">
                <Link margin="auto" href="/" justifyContent="space-between">
                    <Img borderRadius="full" boxSize="70px" objectFit="cover" src="/images/logo.png" alt="Logo" />
                </Link>
                <Heading marginLeft="5px" fontSize="md" display={["none", "none", "block", "block"]} marginTop="10px" color={fontColor}>
                    {props.title}
                    <Text fontSize="xs" color={fontColor}>
                        {props.subtitle}
                    </Text>
                </Heading>

            </Flex>
            <Flex marginLeft="10px" flexBasis="12%">
                <Button margin="auto" size="md" colorScheme="blue" fontSize="xl" onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
            <List justifySelf="flex-end" display={["none", "none", "flex", "flex"]} flexBasis="50%" justifyContent="flex-end" alignItems="center">
                {
                    menuItems.map((item, index) => (
                        <ListItem
                            key={index}
                            onMouseEnter={() => setHovered(item.name)}
                            onMouseLeave={() => setHovered('')}
                            className={style.menuItem}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="sm"
                            fontWeight="bold"
                            bg={hovered === item.name ? '#000' : 'transparent'}
                            borderRadius="full"
                            padding="0.5rem"
                            margin="0.5rem"
                        >
                            <Link color={hovered === item.name ? '#fff' : fontColor} href={item.href}>
                                <ListIcon marginRight="0.5rem">{item.icon}</ListIcon>
                                {item.name}
                            </Link>
                        </ListItem>
                    ))
                }
            </List>

            <Flex flexBasis="50%" justifySelf="flex-end" justifyContent="flex-end" alignItems="center" display={["flex", "flex", "none", "none"]}>
                <Button
                    onClick={handleToggle}
                    className={style.menuButton}
                    display={["flex", "flex", "none", "none"]}
                    bg={bgColor}
                    color={fontColor}
                    borderRadius="full"
                    boxSize="50px"
                    fontSize="xl"
                    padding="0.5rem"
                    margin="0.5rem"
                >
                    <HamburgerIcon />
                </Button>

                <List
                    display={[(isOpen ? "block" : "none"), (isOpen ? "block" : "none"), "none", "none"]}
                    flexBasis="70%"
                    justifyContent="flex-end"
                    alignItems="center"
                    bg={bgColor}
                    color={fontColor}
                    fontSize="sm"
                    fontWeight="bold"
                    borderRadius="20px"
                    padding="0.5rem"
                    margin="0.5rem"
                    position="absolute"
                    top="100%"
                    left="0"
                    right="0"
                    zIndex="1"
                    overflow="hidden"
                    transition="all 0.3s ease-in-out"
                >
                    {
                        menuItems.map((item, index) => (
                            <ListItem
                                key={index}
                                onMouseEnter={() => setHovered(item.name)}
                                onMouseLeave={() => setHovered('')}
                                className={style.menuItem}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize="sm"
                                fontWeight="bold"
                                bg={hovered === item.name ? '#000' : 'transparent'}
                                borderRadius="full"
                                padding="0.5rem"
                                margin="0.5rem"
                            >
                                <Link color={hovered === item.name ? '#fff' : fontColor} href={item.href}>
                                    <ListIcon marginRight="0.5rem">{item.icon}</ListIcon>
                                    {item.name}
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
            </Flex>
        </Flex>
    );
};

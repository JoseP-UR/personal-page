// setup your wrapper in the _app file (e.g: pages/_app.js)
import { Chakra } from "../chakra"
import Header from "../components/header";
import { Box } from "@chakra-ui/layout";
import { CheckCircleIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/dist/client/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const menuItems = [
        {
            name: 'Home',
            href: '/',
            icon: router.pathname === '/' ? <CheckCircleIcon /> : <ArrowForwardIcon />,
            children: [
                {
                    name: 'About',
                    href: '#about',
                    icon: <ArrowForwardIcon />
                },
            ]
        },
        {
            name: 'Blog',
            href: '/blog',
            icon: router.pathname === '/blog' ? <CheckCircleIcon /> : <ArrowForwardIcon />
        },
        {
            name: 'Contact',
            href: '/contact',
            icon: router.pathname === '/contact' ? <CheckCircleIcon /> : <ArrowForwardIcon />
        },
    ];

    const headerHeight = "100px";
    return (
        <Chakra cookies={pageProps.cookies}>
            <Header height={headerHeight} title="Jose Paulo Urives Rosa" subtitle="Full Stack Developer" menuItems={menuItems} />
            <Box height={headerHeight}></Box>
            <Component {...pageProps} />
        </Chakra>
    );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../chakra"
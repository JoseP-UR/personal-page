// setup your wrapper in the _app file (e.g: pages/_app.js)
import { Chakra } from "../chakra"
import Header from "../components/header";
import { Box } from "@chakra-ui/layout";
import { CheckCircleIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/dist/client/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    const getIcon = (path) => {
        return router.pathname === path ? <CheckCircleIcon /> : <ArrowForwardIcon />
    }

    const getHref = (path) => {
        return router.pathname === path ? "#" : path
    }

    const menuItems = [
        {
            name: 'Home',
            path: '/',
            href: getHref('/'),
            icon: getIcon('/'),
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
            path: '/blog',
            href: getHref('/blog'),
            icon: getIcon('/blog'),
        },
        {
            name: 'Contact',
            path: '/contact',
            href: getHref('/contact'),
            icon: getIcon('/contact'),
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
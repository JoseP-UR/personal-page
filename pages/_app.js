// setup your wrapper in the _app file (e.g: pages/_app.js)
import { Chakra } from "../chakra"
import Header from "../components/header/header";
import { Box } from "@chakra-ui/layout";

export default function App({ Component, pageProps }) {
    const headerHeight = "100px";
    return (
        <Chakra cookies={pageProps.cookies}>
            <Header height={headerHeight} title="Jose Paulo Urives Rosa" subtitle="Full Stack Developer" />
            <Box height={headerHeight}></Box>
            <Component {...pageProps} />
        </Chakra>
    );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../chakra"
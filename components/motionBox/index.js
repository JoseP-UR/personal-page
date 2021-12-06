import { Box } from "@chakra-ui/layout"
import { forwardRef } from "@chakra-ui/system";
import { motion, isValidMotionProp } from "framer-motion";

const MotionBox = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            // do not pass framer props to DOM element
            Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
        )
        return <Box ref={ref} {...chakraProps} />
    }),
)

export default MotionBox
import { motion, useScroll, useTransform } from "framer-motion"
import { RefObject, useRef } from "react"

interface IProps {
    appContainerRef: RefObject<HTMLDivElement>
}

export const AboutPage = ({appContainerRef}: IProps) => {
    const ref = useRef(null);
    const {scrollYProgress } = useScroll({
        container: appContainerRef,
        target: ref,
        offset: [`-0.3 0.3`, `0.3 0.3`]
    });
    const scaleX = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    return (
        <section style={{
            height: "100%",
        }}>
            <motion.div 
            ref={ref}
            style={{
                margin: "auto",
                borderRadius: "25px",
                height: "80%",
                width: "80%",
                backgroundColor: "blue",
                scaleX,
                padding: "20px",
            }}
        >
            <h1>About page</h1>
        </motion.div>
        </section>
    )
}
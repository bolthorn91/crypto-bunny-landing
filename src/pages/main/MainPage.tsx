import { motion } from "framer-motion"
import { texts } from "../../data/texts"
import { HeaderComponent } from "../../components/header/HeaderComponent"


export const MainPage = () => {
    const transition = { ease: "easeOut", duration: 1.5 }
    const animation1 =  {
        initial: { x: -100, opacity: 0  },
        transition,
        animate: { x: 0, opacity: 1 }
    }
    const animation2 =  {
        initial: { x: 100, opacity: 0 },
        transition,
        animate: { x: 0, opacity: 1}
    }
    const animations =  {
        text1: animation1, 
        text2: animation2
    }
    return (
        <div style={{
            height: "100%",
        }} >
            <HeaderComponent/>
            <motion.section style={{
                paddingTop: "140px",
            }}
            >
                <div style={{
                    paddingLeft: "150px",   
                    textAlign: "left",
                    maxWidth: "50%"
                }}>
                    <h2 style={{
                        marginBottom: "60px"
                    }}>logo here!</h2>
                    <motion.h2 
                        style={{
                            marginBottom: "60px"
                        }}
                        {...animations.text1}
                    >
                        {texts.title}
                    </motion.h2>
                    <motion.h2 {...animations.text2}>{texts.subtitle}</motion.h2>
                </div>
                <h1></h1>
            </motion.section>
            <motion.p 
                style={{
                position: "fixed",
                bottom: "25px",
                width: "100%",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0}}
                transition = {{ duration: 1.5, repeat: Infinity  }}
            >
                Scroll down
            </motion.p>
        </div>
    )
}
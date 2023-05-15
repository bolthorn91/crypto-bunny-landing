import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "./HeaderComponent.css";
import { motion } from "framer-motion";

export const HeaderComponent = () => {
    return (
        <motion.header 
            className="header-component"
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                paddingTop:"60px"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            transition = {{ ease: "easeOut", duration: 1.5 }}
        >
            <ul style={{display: "flex"}}>
                {routes.map((item, index) => {
                    return <li className="header-component__link" key={index}>
                        <Link to={item.path}>{item.text}</Link>
                    </li>
                })}
                <li></li>
            </ul>
        </motion.header>
    )
}
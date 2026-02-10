import { useEffect, useState } from "react";
import favicon from "../assets/images/favicon.webp";

const Preloader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setVisible(false), 1200);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    if (!visible) return null;

    return (
        <div className="preloader">
            <div className="favicon-wrapper">
                <img src={favicon} alt="FlexiMart" />
            </div>
            <p>Loading FlexiMart...</p>
        </div>
    );
};

export default Preloader;


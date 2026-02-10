import { useEffect, useState } from "react";
import favicon from "../assets/images/favicon.webp";

const Preloader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const hidePreloader = () => {
            setVisible(false);
        };

        if (document.readyState === "complete") {
            hidePreloader();
        } else {
            window.addEventListener("load", hidePreloader);
        }

        window.addEventListener("content-loaded", hidePreloader);

        return () => {
            window.removeEventListener("load", hidePreloader);
            window.removeEventListener("content-loaded", hidePreloader);
        };
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





import React, { useState, useRef, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


// Language configuration - Main languages
const LANGUAGES = [
    { name: "English", code: "en" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Italian", code: "it" },
    { name: "Portuguese", code: "pt" },
    { name: "Russian", code: "ru" },
    { name: "Chinese", code: "zh-CN" },
    { name: "Japanese", code: "ja" },
    { name: "Korean", code: "ko" },
    { name: "Arabic", code: "ar" },
    { name: "Hindi", code: "hi" },
    { name: "Turkish", code: "tr" },
    { name: "Dutch", code: "nl" },
    { name: "Polish", code: "pl" },
];

// RTL languages
const RTL_LANGUAGES = ["ar", "ur", "he", "fa"];

export default function Header() {
    const { cart, wishlist } = useCart();
    const [selectedLang, setSelectedLang] = useState(() => {
        const saved = localStorage.getItem("selectedLanguage");
        return saved || "English";
    });
    const [openLang, setOpenLang] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const langRef = useRef(null);
    const originalTexts = useRef({});
    const isTranslating = useRef(false);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setOpenLang(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close sidebar on window resize
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 767) {
                setSidebarOpen(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add("sidebar-open");
        } else {
            document.body.classList.remove("sidebar-open");
        }
    }, [sidebarOpen]);

    // Save original text content for translation
    useEffect(() => {
        const textNodes = [];

        function getTextNodes(element) {
            element.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
                    textNodes.push(node);
                } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains("no-translate")) {
                    getTextNodes(node);
                }
            });
        }

        getTextNodes(document.body);
        textNodes.forEach((node, index) => {
            originalTexts.current[`textNode-${index}`] = node.nodeValue;
        });

        document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((el, index) => {
            originalTexts.current[`placeholder-${index}`] = el.placeholder;
        });
    }, []);

    // Function to translate text via Google Translate API
    const translateText = async (text, targetLang) => {
        if (!text || text.trim() === "") return text;

        try {
            const response = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
            );
            const result = await response.json();
            if (result && result[0] && result[0][0] && result[0][0][0]) {
                return result[0][0][0];
            }
            return text;
        } catch (err) {
            console.error("Translation error:", err);
            return text;
        }
    };

    // Translate entire page
    const translatePage = async (targetLang) => {
        if (isTranslating.current) return;
        isTranslating.current = true;

        try {
            const textNodes = [];

            function getTextNodes(element) {
                element.childNodes.forEach((node) => {
                    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
                        textNodes.push(node);
                    } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains("no-translate")) {
                        getTextNodes(node);
                    }
                });
            }
            getTextNodes(document.body);

            // Translate text nodes
            for (let i = 0; i < textNodes.length; i++) {
                const originalText = originalTexts.current[`textNode-${i}`];
                if (originalText) {
                    const translated = await translateText(originalText, targetLang);
                    textNodes[i].nodeValue = translated;
                }
            }

            // Translate placeholders
            const placeholderElements = document.querySelectorAll("input[placeholder], textarea[placeholder]");
            for (let index = 0; index < placeholderElements.length; index++) {
                const el = placeholderElements[index];
                const originalText = originalTexts.current[`placeholder-${index}`];
                if (originalText) {
                    const translated = await translateText(originalText, targetLang);
                    el.placeholder = translated;
                }
            }

            // Handle RTL languages
            const isRTL = RTL_LANGUAGES.includes(targetLang);
            if (isRTL) {
                document.body.classList.add("RTL");
                document.querySelector("header")?.classList.add("RTL");
                document.querySelector("footer")?.classList.add("RTL");
                document.querySelectorAll("section, input, textarea").forEach((el) => {
                    el.classList.add("RTL");
                    el.setAttribute("dir", "rtl");
                    el.setAttribute("lang", targetLang);
                });
                // Optionally append RTL CSS
                if (!document.getElementById("arabic-css")) {
                    const link = document.createElement("link");
                    link.id = "arabic-css";
                    link.rel = "stylesheet";
                    link.href = "/assets/css/arabicStyle.css";
                    document.head.appendChild(link);
                }
            } else {
                document.body.classList.remove("RTL");
                document.querySelector("header")?.classList.remove("RTL");
                document.querySelector("footer")?.classList.remove("RTL");
                document.querySelectorAll("section, input, textarea").forEach((el) => {
                    el.classList.remove("RTL");
                    el.setAttribute("dir", "ltr");
                    el.setAttribute("lang", "en");
                });
                document.getElementById("arabic-css")?.remove();
            }
        } catch (error) {
            console.error("Error translating page:", error);
        } finally {
            isTranslating.current = false;
        }
    };

    // Apply saved language on page load
    useEffect(() => {
        if (selectedLang && selectedLang !== "English") {
            const langObj = LANGUAGES.find((l) => l.name === selectedLang);
            if (langObj) {
                translatePage(langObj.code);
            }
        }
    }, []);

    // Handle language change
    const handleLangChange = (langName) => {
        setSelectedLang(langName);
        localStorage.setItem("selectedLanguage", langName);
        setOpenLang(false);

        if (langName === "English") {
            window.location.reload();
        } else {
            const langObj = LANGUAGES.find((l) => l.name === langName);
            if (langObj) {
                translatePage(langObj.code);
            }
        }
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <header>
            <div className="top-head">
                <Container>
                    <div className="discount">
                        <div className="d-flex align-items-center gap-md-2">
                            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <Link to="#" className="hover1">Shop Now</Link>
                        </div>

                        {/* LANGUAGE DROPDOWN */}
                        <div ref={langRef} className="language-dropdown no-translate no-change d-flex align-items-center position-relative">
                            <button
                                onClick={() => setOpenLang(!openLang)}
                                className="lang-btn d-flex align-items-center gap-2 border-0 bg-transparent"
                            >
                                <span className="hover4">{selectedLang}</span>
                                <FaChevronDown className="dropdown-arrow" />
                            </button>

                            <div className={`dropdown-menu-custom ${openLang ? "show" : ""}`}>
                                {LANGUAGES.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className="language-dropdown-item"
                                        onClick={() => handleLangChange(lang.name)}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* REST HEADER */}
            <Container>
                <div className="elements">
                    <Nav>
                        <figure>
                            <Link to="/" className="navlogo">
                                <img src={Logo} alt="FlexiMart Logo" width="894" height="243" loading="eager" />
                            </Link>
                        </figure>
                        {/* Hamburger Menu Icon */}
                        <button className="hamburger-menu" onClick={() => setSidebarOpen(true)}>
                            <FaBars />
                        </button>
                        {/* Desktop Navigation */}
                        <ul className="navlinks desktop-nav">
                            <li className="nav-item">
                                <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Sign Up</NavLink>
                            </li>
                        </ul>
                        <div className="navicons desktop-nav">
                            <form>
                                <input type="text" className="looking-fore" placeholder="What are you looking for?" />
                                <button className="search" type="button"><FaSearch />
                                </button>
                            </form>
                            <NavLink to="/wishlist" className="FaHeart"><FaHeart />
                                <span>{wishlist.length}</span>
                            </NavLink>
                            <NavLink to="/cart" className="FaShoppingCart"><FaShoppingCart />
                                <span>
                                    {cart.reduce((total, item) => total + item.qty, 0)}
                                </span>
                            </NavLink>
                        </div>
                    </Nav>
                </div>
            </Container>

            {/* Mobile Sidebar Overlay */}
            <div className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`} onClick={closeSidebar}></div>

            {/* Mobile Sidebar */}
            <aside className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-logo" onClick={closeSidebar}>
                        <img src={Logo} alt="FlexiMart Logo" />
                    </Link>
                    <button className="close-sidebar" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>

                <div className="sidebar-search">
                    <form>
                        <input type="text" className="looking-fore" placeholder="What are you looking for?" />
                        <button className="search" type="button"><FaSearch /></button>
                    </form>
                </div>

                <ul className="sidebar-links">
                    <li className="nav-item">
                        <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeSidebar}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeSidebar}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeSidebar}>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signup" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={closeSidebar}>Sign Up</NavLink>
                    </li>
                </ul>

                <div className="sidebar-icons">
                    <NavLink to="/wishlist" className="sidebar-icon-link" onClick={closeSidebar}>
                        <FaHeart />
                        <span>Wishlist</span>
                    </NavLink>
                    <NavLink to="/cart" className="sidebar-icon-link" onClick={closeSidebar}>
                        <FaShoppingCart />
                        <span>Cart</span>
                    </NavLink>
                </div>
            </aside>
        </header>
    );
}
// App.jsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/Back-To-Top";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signup/Signin";



function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                {/*  <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>

            <Footer />
            <BackToTop />
        </>
    );
}

export default App;


// git checkout main
// git add .
// git commit -am
// git push origin main
// npm run deploy 
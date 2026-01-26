// App.jsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home/Home";


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                {/*  <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>

            {/* <Footer /> */}
        </>
    );
}

export default App;

// function App() {
//     return (
//         <div>
//             <h1>FlexiMart React App</h1>
//             <p>Your project is clean and ready for development.</p>
//         </div>
//     );
// }

// export default App;


// git checkout main
// git add .
// git commit -am
// git push origin main
// npm run deploy 
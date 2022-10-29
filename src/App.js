import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Data } from "./Page/Data";
import { Report } from "./Page/Report";
import Navbar from "./Components/Navbar";

function App() {
    return (
        // <Router>
        //     <Header />
        //     <Routes>
        //         <Route index element={<Data />} />
        //         <Route path="report" element={<Report />} />
        //     </Routes>
        // </Router>
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Report />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/data" element={<Data />} />
                </Routes>
            </div>
        </>
    );
}

export default App;

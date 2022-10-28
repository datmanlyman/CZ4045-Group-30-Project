import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Data } from './Page/Data';
import { Report } from './Page/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Data/>} />
        <Route path="report" element={<Report/>} />
      </Routes>
    </Router>
  );
}

export default App;

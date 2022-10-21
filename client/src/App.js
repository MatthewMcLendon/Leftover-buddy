import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllMealsPage from "./pages/AllMealsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/meals" element={<AllMealsPage />} />
      </Routes>
    </Router>
  );
}

export default App;



import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import { Routes, Route, } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<PageLayout />} >
          <Route path='' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App

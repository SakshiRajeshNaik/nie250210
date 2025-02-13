import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoffeeOrder from "./coffee/CoffeeOrder";
import CoffeeCreate from "./coffee/CoffeeCreate";
import CoffeeEdit from "./coffee/CoffeeEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoffeeOrder />} />
        <Route path="/coffee/list" element={<CoffeeOrder />} />
        <Route path="/coffee/create" element={<CoffeeCreate />} />
        <Route path="/coffee/edit/:id" element={<CoffeeEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
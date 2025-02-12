import CoffeeOrder from "./coffee/CoffeeOrder"
import CoffeeCreate from "./coffee/CoffeeCreate"
import CoffeeEdit from "./coffee/CoffeeEdit"
//import Counter from "./Counter" 
//import FullName from "./FullName"
//import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {//app is a functional component of UI
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<CoffeeOrder/>}/>
            <Route path="/coffee/order" element={<CoffeeOrder/>}/>
            <Route path="/coffee/create" element={<CoffeeCreate/>}/>
            <Route path="/coffee/edit/:id" element={<CoffeeEdit/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      
      
    </>
  )
}

export default App
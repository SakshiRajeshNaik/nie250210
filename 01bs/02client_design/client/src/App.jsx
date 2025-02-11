import FlightList from "./flights/FlightList"
import FlightCreate from "./flights/FlightCreate"
import FlightEdit from "./flights/FlightEdit"
import Counter from "./Counter" 
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {//app is a functional component of UI
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<FlightList/>}/>
            <Route path="/flights/list" element={<FlightList/>}/>
            <Route path="/flights/create" element={<FlightCreate/>}/>
            <Route path="/flights/edit/:id" element={<FlightEdit/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Counter/>
    </>
  )
}

export default App
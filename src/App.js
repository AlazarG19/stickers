import "./App.css"
import Shop from "./container/Shop";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Home from "./Home";
function App() {
  return (
   <Router>
     <Routes> 
      <Route exact path="/" element={<Home />} />
      <Route path = "/Shop" element={<Shop />}/>
     </Routes>
 
   </Router> 
    
  );
}

export default App;

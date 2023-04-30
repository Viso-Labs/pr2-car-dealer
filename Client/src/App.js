import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Leads_avalible from "./page/Leads_avalible";
import Leads_avalible_open from "./page/Leads_avalible_open";
import Leads_success from "./page/Leads_success";
import Dashboard from "./page/Dashboard";
import Leads_reject from "./page/Leads_reject";
import Report from "./page/Report";
import Stock from "./page/Stock";
import Stock_open from "./page/Stock_open";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/Leads_avalible' element={<Leads_avalible/>} />
      <Route path='/Leads_success' element={<Leads_success/>} />
      <Route path='/Leads_reject' element={<Leads_reject/>} />
      <Route path='/Stock' element={<Stock/>} />
      <Route path='/Report' element={<Report/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

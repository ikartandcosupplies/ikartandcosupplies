import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import Startup from "./components/Startup";
import CompanyProfile from "./components/CompanyProfile";
import WoodProcurement from "./components/WoodProcurement";
import IndustrialSupply from "./components/IndustrialSupply";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/aboutus" element={<CompanyProfile />} />
        <Route path="/procurement" element={<WoodProcurement />} />
        <Route path="/supply" element={<IndustrialSupply />} />
        
      </Route>
    </Routes>
    <WhatsAppButton />
    </>
  );
}

export default App;

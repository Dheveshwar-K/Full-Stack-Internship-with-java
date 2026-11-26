
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import WorkOrders from "./pages/WorkOrders";
import Technicians from "./pages/Technicians";
import Facilities from "./pages/Facilities";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/work-orders" element={<WorkOrders />} />
          <Route path="/technicians" element={<Technicians />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;

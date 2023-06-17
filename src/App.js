import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Fellows from "./pages/Fellows";
import TimeSpendDetails from "./pages/TimeSpendDetails";
import TrainingDetails from "./pages/TrainingDetails";
import NsdcStatus from "./pages/NsdcStatus";
import Home from "./Home";
import Dashboard from "./pages/Dashboard";
import Schools from "./pages/Schools";
import Anganbadi from "./pages/Anganbadi";
import PgeStudents from "./pages/PgeStudents";
import EceStudents from "./pages/EceStudents";
// import { Login } from "@mui/icons-material";
import Login from "./pages/Login";

// 3️⃣ Router singleton created
const router = createBrowserRouter([{ path: "*", Component: Root }]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}

// 1️⃣ Changed from App to Root
function Root() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Home />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fellows" element={<Fellows />} />
        <Route path="/TimeSpendDetails" element={<TimeSpendDetails />} />
        <Route path="/TrainingDetails" element={<TrainingDetails />} />
        <Route path="/NsdcStatus" element={<NsdcStatus />} />
        <Route path="/Schools" element={<Schools />} />
        <Route path="/Anganbadi" element={<Anganbadi />} />
        <Route path="/PgeStudents" element={<PgeStudents />} />
        <Route path="/EceStudents" element={<EceStudents />} />
      </Route>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
}

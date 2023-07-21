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
import PrivateRoute from "./components/PrivateRoute";
import Schools from "./pages/Schools";
import Anganbadi from "./pages/Anganbadi";
import PgeStudents from "./pages/PgeStudents";
import EceStudents from "./pages/EceStudents";
import Fln from "./pages/Fln";
import PromotedStudent from "./pages/PromotedStudent";
import Feedback from "./pages/Feedback";

import Login from "./pages/Login";
// import PromotedStudent from "./pages/PromotedStudent";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />}>
          <Route path="/home/dashboard" element={<Dashboard />} />
          <Route path="/home/fellows" element={<Fellows />} />
          <Route path="/home/TimeSpendDetails" element={<TimeSpendDetails />} />
          <Route path="/home/TrainingDetails" element={<TrainingDetails />} />
          <Route path="/home/NsdcStatus" element={<NsdcStatus />} />
          <Route path="/home/Schools" element={<Schools />} />
          <Route path="/home/Anganbadi" element={<Anganbadi />} />
          <Route path="/home/PgeStudents" element={<PgeStudents />} />
          <Route path="/home/EceStudents" element={<EceStudents />} />
          <Route path="/home/Fln" element={<Fln />} />
          <Route path="/home/PromotedStudent" element={<PromotedStudent />} />
          <Route path="/home/Feedback" element={<Feedback />} />
        </Route>
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

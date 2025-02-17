import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { ROLES } from "./utils/roles";
import HomePage from "./pages/Public/HomePage";
import ProjectsPage from "./pages/Public/ProjectsPage";
import ProjectDetails from "./pages/Public/ProjectDetails";
import ComplaintPage from "./pages/Public/ComplaintPage";
import RevenuePage from "./pages/Public/RevenuePage";
import Login from "./pages/Auth/Login";
import DashboardPage from "./pages/Admin/DashboardPage";
import SuperDashboardPage from "./pages/SuperAdmin/SuperDashboardPage";

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/revenue" element={<RevenuePage />} />

        {/* Admin Login */}
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute requiredRole={ROLES.ADMIN}>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Super Admin Routes */}
        <Route
          path="/super-admin/dashboard"
          element={
            <PrivateRoute requiredRole={ROLES.SUPER_ADMIN}>
              <SuperDashboardPage />
            </PrivateRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
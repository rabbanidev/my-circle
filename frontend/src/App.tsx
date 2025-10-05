import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import { useAuthCheck, useMyInfo } from "./hooks";
import AuthRoute from "./routes/AuthRoute";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  const authCheck = useAuthCheck();
  useMyInfo();

  if (!authCheck) {
    return <div>Authentication Checking...</div>;
  }

  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import MyProfile from "./pages/profile/MyProfile";
import { useAuthCheck, useMyInfo, useSocket } from "./hooks";
import AuthRoute from "./routes/AuthRoute";
import PrivateRoute from "./routes/PrivateRoute";
import UserProfile from "./pages/profile/UserProfile";
import { getSocket } from "./lib/socket";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function App() {
  const authCheck = useAuthCheck();
  useSocket();
  useMyInfo();
  const socket = getSocket();

  useEffect(() => {
    socket?.on("error", (error: { message: string }) => {
      toast.error(error.message || "Something went wrong!");
    });
  }, [socket]);

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
        <Route path="/profile/:userId" element={<UserProfile />} />

        <Route element={<PrivateRoute />}>
          <Route path="/me" element={<MyProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}

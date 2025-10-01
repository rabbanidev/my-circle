import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Profile from "./pages/profile";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Route>
    </Routes>
  );
}

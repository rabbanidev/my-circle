import { Outlet, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route index element={<>Hello</>} />
      </Route>
    </Routes>
  );
}

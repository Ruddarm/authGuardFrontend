import "./App.css";
import { ClientAuthProvider } from "./Layouts/Auth/Hooks/ClientAuthHooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import ClientRoutes from "./Routes/ClientRoute";
import UserRoutes from "./Routes/UserRoute";

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <ClientAuthProvider>
          <Routes>
            <Route path="/client/*" element={<ClientRoutes />}></Route>
          </Routes>
        </ClientAuthProvider>
        <Routes>
          <Route path="/user/*" element={<UserRoutes />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;

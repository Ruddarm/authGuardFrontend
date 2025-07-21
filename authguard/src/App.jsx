import "./App.css";
import { AuthProvider } from "./Features/Auth/AuthHooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import AuthPage from "./Page/Auth/AuthPage";
import ClientRoutes from "./Routes/ClientRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/client/*" element={<ClientRoutes />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;

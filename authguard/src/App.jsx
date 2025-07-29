import "./App.css";
import { ClientAuthProvider } from "./Layouts/Auth/Hooks/ClientAuthHooks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Layouts/Header/Header";
import ClientRoutes from "./Routes/ClientRoute";
import UserRoutes from "./Routes/UserRoute";
import { UserAuthProvider } from "./Layouts/Auth/Hooks/UserAuthHook";
import OathPage from "./Page/OathPage/OathPage";

import { useEffect } from "react";
import { OauthProvider } from "./Layouts/Auth/Hooks/Oathhooks";

// ✅ LayoutWrapper ko andar lo
function LayoutWrapper() {
  const location = useLocation();

  const hideHeaderRoutes = ["/oauth/user/login"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}

      <ClientAuthProvider>
        <Routes>
          <Route path="/client/*" element={<ClientRoutes />} />
        </Routes>
      </ClientAuthProvider>

      <UserAuthProvider>
        <OauthProvider>
          <Routes>
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/oauth/user/login" element={<OathPage />} />
          </Routes>
        </OauthProvider>
      </UserAuthProvider>
    </>
  );
}

// ✅ Router ke andar LayoutWrapper
function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;

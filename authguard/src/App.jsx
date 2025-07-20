import "./App.css";
import { AuthProvider } from "./Features/Auth/AuthHooks";
import Header from "./Layouts/Header/Header";
import AuthPage from "./Page/Auth/AuthPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Header></Header>
        <AuthPage></AuthPage>
      </AuthProvider>
    </>
  );
}

export default App;

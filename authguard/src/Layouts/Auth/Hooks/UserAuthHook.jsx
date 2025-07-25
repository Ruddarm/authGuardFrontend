import { useState, useEffect, useContext, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance, { setAccessTokenAPI } from "../../../API/ClientAxiosInstance";

function LoginHook() {
  const navigate = useNavigate();
  const { setAccessToken } = useAuth();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [erros, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [apiResponse, setApiResponse] = useState({
    erroMsg: "",
    attempt: false,
  });
  const [touched, setTouched] = useState({});
  const validateField = (name, value) => {
    let error = "";
    if (name == "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email";
    }
    if (name === "password") {
      if (!value.trim()) error = "Password is required";
      else if (value.length < 6) error = "Minimum 6 characters";
    }

    return error;
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setCredential((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, credential[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  const validateAll = () => {
    const newErrors = {};
    let isValid = true;
    for (const key in credential) {
      const error = validateField(key, credential[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  };
  const handelLogin = async () => {
    if (validateAll()) {
      try {
        const response = await authenticate(
          credential.email,
          credential.password
        );
        if (response.status == 202) {
          setAccessToken(response.data.accessToken);
          setAccessTokenAPI(response.data.accessToken);
        }
        console.log(response);
        const response2 = await getClient();
        console.log(response2);
        navigate("../dashboard/admin");
      } catch (ex) {
        if (ex.response) {
          setApiResponse((prev) => ({
            ...prev,
            erroMsg: ex.response.data?.message || "Invalid credentials",
          }));
        } else if (ex.request) {
          setApiResponse((prev) => ({
            ...prev,
            erroMsg: "Server unreachable. Please try again later.",
          }));
        } else {
          setApiResponse((prev) => ({
            ...prev,
            erroMsg: ex.message || "Unknown error occurred.",
          }));
        }
      }
    }
  };
  return {
    credential,
    erros,
    touched,
    validateAll,
    handelChange,
    handleBlur,
    handelLogin,
    apiResponse,
    loginSuccess,
  };
}

const ClientAuthContext = createContext();

const ClientAuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null); // token in memory only
  const [verifying, setVerifying] = useState(true);
  useEffect(() => {
    const refresh = async () => {
      try {
        const res = await axiosInstance.get("/auth/User/refresh", {
          withCredentials: true,
        });
        setAccessToken(res.data.accessToken);
      } catch (err) {
        console.log(err);
        setAccessToken(null);
      } finally {
        setVerifying(false);
      }
    };
    refresh();
  }, []);

  useEffect(() => {
    setAccessTokenAPI(accessToken);
  }, [accessToken]);
  const logout = () => {
    setAccessToken(null);
    setAccessTokenAPI(null);
  };

  return (
    <ClientAuthContext.Provider
      value={{ accessToken, setAccessToken, logout, verifying }}
    >
      {children}
    </ClientAuthContext.Provider>
  );
};

const userProtectedRoute = ({ children }) => {
  const { accessToken, verifying } = useAuth();
  if (verifying) {
    return <>Verify login....</>;
  }
  console.log("acess token is ", accessToken);
  return accessToken ? (
    children
  ) : (
    <Navigate to={"/User/login"} replace></Navigate>
  );
};

const useAuth = () => useContext(ClientAuthContext);

export { LoginHook, useAuth, ClientAuthProvider, userProtectedRoute };

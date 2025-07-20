import { useState, useContext, createContext } from "react";
import authenticate, { getClient } from "../../API/authApi";
import { setAccessToken } from "../../API/AxiosInstance";

function LoginHook() {
  const [credential, setCredential] = useState({
    email: "rudram4234@gmail.com",
    password: "securedpassword",
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
    for (const key in credential) {
      const error = validateField(key, credential[key]);
      if (error) newErrors[key] = error;
    }
    setErrors(newErrors);
  };
  const handelLogin = async () => {
    validateAll();
    if (Object.keys(erros).length == 0) {
      try {
        const response = await authenticate(
          credential.email,
          credential.password
        );
        if(response.status==202){
          setAccessToken(response.data.accessToken);
        }
        console.log(response);
        const response2 = await getClient();
        console.log(response2);
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

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  console.log("children ", children)
  const [accessToken, setAccessToken] = useState(null); // token in memory only
  console.log(accessToken)
  const logout = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { LoginHook, useAuth, AuthProvider };

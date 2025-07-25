import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupClient } from "../../../API/ClientAuthApi";

function UserSignupHook() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [apiResponse, setApiResponse] = useState({
    erroMsg: "",
    attempt: false,
  });

  const validateField = (name, value) => {
    let error = "";

    if (name === "firstName" || name === "lastName") {
      if (!value.trim()) error = `${name} is required`;
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email";
    }

    if (name === "password") {
      if (!value.trim()) error = "Password is required";
      else if (value.length < 6) error = "Minimum 6 characters";
    }

    if (name === "confirmPassword") {
      if (!value.trim()) error = "Confirm Password is required";
      else if (value !== user.password) error = "Passwords do not match";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    if (
      (name === "password" || name === "confirmPassword") &&
      touched.confirmPassword
    ) {
      const confirmError = validateField(
        "confirmPassword",
        name === "password" ? user.confirmPassword : value
      );
      setErrors((prev) => ({ ...prev, confirmPassword: confirmError }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, user[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    for (const key in user) {
      const error = validateField(key, user[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async () => {
    if (validateAll()) {
      try {
        const response = await signupClient(user); // Make sure this API exists and returns success
        console.log("Signup success", response);
        navigate("user/login"); // Redirect after signup
      } catch (ex) {
        if (ex.response) {
          setApiResponse({
            erroMsg: ex.response.data?.message || "Signup failed",
            attempt: true,
          });
        } else if (ex.request) {
          setApiResponse({
            erroMsg: "Server unreachable. Please try again later.",
            attempt: true,
          });
        } else {
          setApiResponse({
            erroMsg: ex.message || "Unknown error occurred.",
            attempt: true,
          });
        }
      }
    }
  };

  return {
    user,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    handleSignup,
    apiResponse,
  };
}

export default UserSignupHook;

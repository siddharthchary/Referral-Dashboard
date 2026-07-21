import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  BgCont,
  LogCard,
  InputElement,
  LogHeader,
  LogDescription,
  Label,
  Form,
  LoginButton,
  FailedMsg,
} from "./StyledComponents";

const LoginRoute = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const formSubmitted = async (event) => {
    event.preventDefault();

    // 1. Validation check
    if (userEmail.trim() === "" || password.trim() === "") {
      setShowError(true);
      setErrorMsg("Email and password are required");
      return; // Stop execution if validation fails
    }

    setShowError(false);
    setIsLoading(true);

    const url = "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: password,
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        Cookies.set("jwt_token", data.data.token, { expires: 30 }); // Store JWT token
        navigate("/dashboard", { replace: true });
      } else {
        setShowError(true);
        setErrorMsg(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      setShowError(true);
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const trackEmail = (event) => setUserEmail(event.target.value);
  const trackPassword = (event) => setPassword(event.target.value);

  return (
    <BgCont>
      <LogCard>
        <LogHeader>Go Business</LogHeader>
        <LogDescription>
          Sign in to open your referral dashboard.
        </LogDescription>

        <Form onSubmit={formSubmitted}>
          <Label htmlFor="email">Email</Label>
          <InputElement
            type="email"
            id="email"
            onChange={trackEmail}
            value={userEmail}
            required
          />

          <Label htmlFor="password">Password</Label>
          <InputElement
            type="password"
            id="password"
            onChange={trackPassword}
            value={password}
            required
          />

          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </LoginButton>

          {showError && <FailedMsg>{errorMsg}</FailedMsg>}
        </Form>
      </LogCard>
    </BgCont>
  );
};

export default LoginRoute;
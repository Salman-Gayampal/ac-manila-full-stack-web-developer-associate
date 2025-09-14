import { useState } from "react";
import "./SignupForm.css";

function SignupForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const validate = () => {
    const inlineMessages = {};
    if (!email.includes("@") || !email.includes(".")) {
      inlineMessages.email = 'Email must include "@" and a "."';
    }
    if (password.length < 8) {
      inlineMessages.password = "Password must be at least 8 characters";
    }
    return inlineMessages;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup Form</h1>
      <div className="form-group">
        <label>Email:</label>
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, email: true }))}
          onBlur={() => setTouched((prev) => ({ ...prev, email: false }))}
        />
        {touched.email && errors.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, password: true }))}
          onBlur={() => setTouched((prev) => ({ ...prev, password: false }))}
        />
        {touched.password && errors.password && (
          <div className="error">{errors.password}</div>
        )}
      </div>
      <button className="signup-button" type="submit" disabled={!isValid}>
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;

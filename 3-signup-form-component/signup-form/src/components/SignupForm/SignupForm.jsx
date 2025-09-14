import { useState } from "react";
import "./SignupForm.css";

function SignupForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const validate = () => {
    const errors = {};
    if (!email.includes("@") || !email.includes(".")) {
      errors.email = 'Email must include "@" and a "."';
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
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
      <div>
        <label>Email:</label>
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
        />
        {touched.email && errors.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>

      <div>
        <label>Password:</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
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

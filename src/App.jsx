import { useState } from "react";
import "./App.css";

function App() {
  const [activeForm, setActiveForm] = useState("login");

  const handleSubmit = (e) => {
    alert(`Username: ${username}, Password: ${password}`);
    e.preventDefault();
  };

  const toggleForm = () => {
    setActiveForm(activeForm === "login" ? "register" : "login");
  };

  const LoginForm = () => {
    return (
      <form
        className={activeForm === "login" ? "active" : ""}
        onSubmit={handleSubmit}
      >
        <h1>Login Form</h1>
        <h2>Username</h2>
        <input
          type="text"
          name="username"
          required={true}
          placeholder="Enter your username"
        />
        <h2>Password</h2>
        <input
          type="password"
          name="password"
          required={true}
          placeholder="Enter your password"
        />
        <br />
        <button type="submit">Login</button>
        <div className="form-change">
          <h3>Not yet a user?</h3>
          <h3 onClick={toggleForm}>Sign up!</h3>
        </div>
      </form>
    );
  };

  const SignupForm = () => {
    return (
      <form
        className={activeForm === "register" ? "active" : ""}
        onSubmit={handleSubmit}
      >
        <h1>Sign up Form</h1>
        <h2>Username</h2>
        <input
          type="text"
          name="username"
          required={true}
          placeholder="Enter your username"
        />
        <h2>Password</h2>
        <input
          type="password"
          name="password"
          required={true}
          placeholder="Enter your password"
        />
        <br />
        <h2>Repeat password</h2>
        <input
          type="password"
          name="repeatPassword"
          required={true}
          placeholder="Repeat your password"
        />
        <br />
        <button type="submit">Register</button>
        <div className="form-change">
          <h3>Already a user?</h3>
          <h3 onClick={toggleForm}>Login!</h3>
        </div>
      </form>
    );
  };

  return (
    <div className="App">
      {activeForm === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

export default App;

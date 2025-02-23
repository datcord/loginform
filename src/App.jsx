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
        <input type="text" placeholder="Enter your username" />
        <h2>Password</h2>
        <input type="password" placeholder="Enter your password" />
        <br />
        <button type="submit">Login</button>
        <h3 onClick={toggleForm}>Not yet a user? Sign up!!</h3>
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
        <input type="text" name="username" placeholder="Enter your username" />
        <h2>Password</h2>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <h2>Repeat password</h2>
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat your password"
        />
        <br />
        <button type="submit">Register</button>
        <h3 onClick={toggleForm}>Already a user? Login</h3>
      </form>
    );
  };

  return (
    <div className="App">
      <LoginForm />
      <SignupForm />
    </div>
  );
}

export default App;

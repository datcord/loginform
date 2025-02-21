import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        style={{
          display: activeForm === "login" ? "flex" : "none",
        }}
        onSubmit={handleSubmit}
      >
        <h1>Login Form</h1>
        <h2>Username</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        <h1 onClick={toggleForm}>Register</h1>
      </form>
    );
  };

  const SignupForm = () => {
    return (
      <form
        style={{
          display: activeForm === "register" ? "flex" : "none",
        }}
        onSubmit={handleSubmit}
      >
        <h1>Sign up Form</h1>
        <h2>Username</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <h2>Repeat password</h2>
        <input
          type="password"
          placeholder="Repeat your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
        <h1 onClick={toggleForm}>Login</h1>
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

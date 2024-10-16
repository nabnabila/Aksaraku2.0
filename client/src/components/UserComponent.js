import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../services/userService"; // Import Axios service

const UserComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        const response = await login(email, password);
        alert("Berhasil Masuk");
        navigate("/Homepage");
      } else {
        const response = await signup(email, password);
        alert("Berhasil Daftar");
        navigate("/Homepage");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Masuk" : "Daftar"}</h2>
      <form className="p-1 m-1" onSubmit={handleSubmit}>
        <div>
          <label className="p-1 m-3">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className=" m-1"> Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? "Masuk" : "Daftar"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Beralih ke Daftar" : "Beralih ke Masuk"}
      </button>
    </div>
  );
};

export default UserComponent;

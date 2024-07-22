import React from "react";
import { useAuth } from "../hooks/useAuth";
import useForm from "../hooks/useForm";

const AuthForm = ({ isLogin }) => {
  const { login, register } = useAuth();
  const [formValues, handleChange] = useForm({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    if (isLogin) {
      await login(email, password);
    } else {
      await register(email, password);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl mb-4">{isLogin ? "Login" : "Register"}</h2>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 border border-gray-300 rounded"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        {isLogin ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;

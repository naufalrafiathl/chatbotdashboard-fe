import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleCreate = () => {
    router.push("/create-chatbot");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1>Chatbot Dashboard</h1>
        <div className="flex items-center">
          {user && (
            <>
              <button
                onClick={handleCreate}
                className="bg-green-500 p-2 rounded mr-2"
              >
                Create
              </button>
              <button onClick={logout} className="bg-red-500 p-2 rounded">
                Logout
              </button>
            </>
          )}
        </div>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;

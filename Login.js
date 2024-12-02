import React from 'react';

const Login = ({ handleLogin }) => (
  <div className="flex justify-center items-center h-screen">
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
      <form onSubmit={handleLogin}>
        {/* Login form */}
      </form>
    </div>
  </div>
);

export default Login;

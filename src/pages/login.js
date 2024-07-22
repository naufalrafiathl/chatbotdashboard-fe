import AuthForm from '../../components/AuthForm';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthForm isLogin />
    </div>
  );
};

export default Login;

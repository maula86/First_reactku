import { Link } from "react-router-dom";

const LoginLayouts = (props) => {
  const {children, headForm = 'Header', welcome = 'welcome'} = props
  return (
    <div className="flex justify-center min-h-screen items-center w-full">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{headForm}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, Please {welcome}
        </p>
        {children}
      
        <h2 className="mt-5 text-center text-slate-400 font-medium">
          {headForm === 'Login' ? 'Not have an account ? Click here to' : 'Already have an account ? Click here to'}
          {headForm === 'Login' && (
            <Link className="text-blue-600" to="/register"> Register</Link>
          )}
          {headForm === 'Register' && (
            <Link className="text-blue-600" to="/login"> Login</Link>
          )}
        </h2>




        {/* <h2 className="mt-5 text-center text-slate-400 font-medium">Not have an account ? Click here to  */}
        {/* <Link className="text-blue-600" to="/register"> Register</Link> */}
      {/* </h2> */}
      </div>
    </div>
  );
};

export default LoginLayouts;

import FormLogin from "../Fragments/FormLogin";

const LoginLayouts = (props) => {
  const {children, headForm = 'Header', welcome = 'welcome'} = props
  return (
    <div className="flex justify-center min-h-screen items-center w-full">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{headForm}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please {welcome}
        </p>
        {children}
      </div>
    </div>
  );
};

export default LoginLayouts;

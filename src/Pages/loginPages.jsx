import FormLogin from '../components/Fragments/FormLogin';
import AuthLayouts from '../components/Layouts/AuthLayouts'

const LoginPages = () => {
  return (
    <AuthLayouts headForm="Register" welcome="Login your account">
      {/* <FormLogin /> */}
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPages

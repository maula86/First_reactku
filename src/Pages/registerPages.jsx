import FormRegister from '../components/Fragments/FormRegister';
import AuthLayouts from '../components/Layouts/AuthLayouts'

const RegisterPages = () => {
  return (
    <AuthLayouts headForm="Register" welcome="Register your account">
      {/* <FormLogin /> */}
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPages

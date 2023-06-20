import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import Labelku from "../Elements/Inbel/Label";
import InputKu from "../Elements/Inbel/input";

const FormLogin = () => {
  return (
    <div className="form-control w-full max-w-lg">
      <Labelku forku="isi" textLabel="Email" />
      <InputKu
        type="email"
        id="isi"
        nameInput="email"
        placeholder="email@gmail.com"
      />
      <Labelku forku="pass" textLabel="Password" />
      <InputKu
        type="password"
        id="pass"
        nameInput="password"
        placeholder="******"
      />
      
      <Button textbtn="Login" />
      <h2 className="mt-5 text-center text-slate-400 font-medium">Not have an account ? Click here to 
        <Link className="text-blue-600" to="/registerPages"> Register</Link>
      </h2>
    </div>
  );
};

export default FormLogin;

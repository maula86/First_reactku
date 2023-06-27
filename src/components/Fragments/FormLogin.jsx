import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import Labelku from "../Elements/Inbel/Label";
import InputKu from "../Elements/Inbel/input";

const FormLogin = () => {
  const HandleLogin = () => {
    alert("Login Success");
  }
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
      
      <Button textbtn="Login" posisi="mt-8" onClick={HandleLogin}/>
      {/* <h2 className="mt-5 text-center text-slate-400 font-medium">Not have an account ? Click here to 
        <Link className="text-blue-600" to="/register"> Register</Link>
      </h2> */}
    </div>
  );
};

export default FormLogin;

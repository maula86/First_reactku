import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import Labelku from "../Elements/Inbel/Label";
import InputKu from "../Elements/Inbel/input";

const FormRegister = () => {
  return (
    <div className="form-control w-full max-w-lg flex justify-center">
      <Labelku forku="name" textLabel="Name" />
      <InputKu
        type="text"
        id="name"
        nameInput="email"
        placeholder="type your name"
      />
      <Labelku forku="email" textLabel="Email" />
      <InputKu
        type="email"
        id="email"
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
      <Labelku forku="confirmPass" textLabel="Confirm Password" />
      <InputKu
        type="password"
        id="confirmPass"
        nameInput="confirmpassword"
        placeholder="******"
      />
      
      <Button textbtn="Register" />
      <h2 className="mt-5 text-center text-slate-400 font-medium">Already have an account ? Click here to  
        <Link className="text-blue-600" to="/loginPages"> Login</Link>
      </h2>
    </div>
  );
};

export default FormRegister;

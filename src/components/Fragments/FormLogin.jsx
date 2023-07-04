import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import Labelku from "../Elements/Inbel/Label";
import InputKu from "../Elements/Inbel/input";
import { Validasiku } from "../../servives/validasiku/valid";

const validLogin = (e,p) => {
  if (e === "" && p === "") {
    throw new Validasiku("Email & Password Tidak Boleh Kosong");
  }
  if (e === "") {
    throw new Validasiku("Email Tidak Boleh Kosong");
  }
  if (p === "") {
    throw new Validasiku("Password Tidak Boleh Kosong");
  }
}
const FormLogin = () => {
  const HandleLogin = (e) => {
    e.preventDefault();
    const {email, password} = e.target
    // console.log(email.value, password.value);
    try {
      validLogin(email.value, password.value)
      
      alert("Login Success");
      return window.location.href = "/product"

    } catch (error) {
      return alert(error.message);
    }
  }
  return (
    <form onSubmit={HandleLogin}>
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
      
      <Button textbtn="Login" posisi="mt-8" type="submit" />
      {/* <h2 className="mt-5 text-center text-slate-400 font-medium">Not have an account ? Click here to 
        <Link className="text-blue-600" to="/register"> Register</Link>
      </h2> */}
    </div>
    </form>
  );
};

export default FormLogin;

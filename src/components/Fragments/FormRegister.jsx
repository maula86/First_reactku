import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import Labelku from "../Elements/Inbel/Label";
import InputKu from "../Elements/Inbel/input";
import { Validasiku } from "../../servives/validasiku/valid";

const FormRegister = () => {
  const validRegis = (n,e,p,cp) => {
    if (n === "" && e === "" && p === "" && cp === "") {
      throw new Validasiku("Name, Email, Password, confirmpasswords Tidak Boleh Kosong");
    }
    if (n === "") {
      throw new Validasiku("Name Tidak Boleh Kosong");
    }
    if (e === "") {
      throw new Validasiku("Email Tidak Boleh Kosong");
    }
    if (p === "") {
      throw new Validasiku("Password Tidak Boleh Kosong");
    }
    if (cp === "") {
      throw new Validasiku("ConfirmPassword Tidak Boleh Kosong");
    }
  }
  const HandleRegister = (e) => {
    e.preventDefault();
    const {name, email, password, confirmpassword } = e.target
    // console.log(email.value, password.value);
    try {
      validRegis(name.value, email.value, password.value, confirmpassword.value)
      const dtregis = [{
        name: name.value,
        email: email.value,
        password: password.value
      }]
      localStorage.setItem(name.value, JSON.stringify(dtregis))
      
      alert("Register Success");
      return window.location.href = "/product"
    } catch (error) {
      return alert(error.message);
    }
  };
  return (
    <form onSubmit={HandleRegister}>
      <div className="form-control w-full max-w-lg flex justify-center">
        <Labelku forku="name" textLabel="Name" />
        <InputKu
          type="text"
          id="name"
          nameInput="name"
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

        <Button textbtn="Register" posisi="mt-8" type="submit" />
        {/* <h2 className="mt-5 text-center text-slate-400 font-medium">Already have an account ? Click here to  
        <Link className="text-blue-600" to="/login"> Login</Link>
      </h2> */}
      </div>
    </form>
  );
};

export default FormRegister;

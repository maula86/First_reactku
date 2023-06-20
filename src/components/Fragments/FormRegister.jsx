import Button from "../Elements/Button/Button";
import Labelku from "../Elements/Inbel/Label";
import InputKu from "../Elements/Inbel/input";

const FormRegister = () => {
  return (
    <div className="form-control w-full max-w-lg">
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
      
      <Button textbtn="Login" />
    </div>
  );
};

export default FormRegister;

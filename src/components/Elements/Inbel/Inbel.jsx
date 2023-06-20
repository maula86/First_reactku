import Labelku from "./Label";
import InputKu from "./input";

const Inbel = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <Labelku 
        forku="isi" 
        textLabel="Email" />
      <InputKu 
        type="email"
        id="isi" 
        nameInput="email"
        placeholder="email@...com" />
      <Labelku 
        forku="pass" 
        textLabel="Password" />
      <InputKu 
        type="password"
        id="pass"
        nameInput="password"
        placeholder="******" />
    </div>
  );
};

export default Inbel;

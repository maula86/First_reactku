import { useState } from "react";
import Button from "../components/Elements/Button/Button"

const Counteran = () => {
    const [getter, setter] = useState(0)
    const HandlePlus = () => {
        setter(getter + 1)
        console.log(getter + 1);
    }
    const HandleMinus = () => {
        // console.log("Minus Success");
        setter(getter - 1)
        console.log(getter - 1);

    }
    const HandleReset = () => {
        // console.log("Reset Success");
        setter(getter * 0 + 1)

    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="mt-5 grid grid-cols-3 gap-x-8">
                <Button textbtn="Plus 😁" posisi={`justify-self-end ${getter >= 10 ? `cursor-not-allowed disabled:bg-slate-600 disabled:hover:shadow-slate-600` : ``}`} disabled={getter >= 10 ? true : false} onClick={HandlePlus}/>
                <h1 className="justify-self-center self-center font-semibold text-white text-3xl mb-4">{getter >= 10 ? "Done ..!" : getter <= 0 ? "Done ..!" : getter}</h1>
                <Button textbtn="Minus 😡" posisi={`justify-self-start ${getter <= 0 ? `cursor-not-allowed disabled:bg-slate-600 disabled:hover:shadow-slate-600` : ``}`} disabled={getter <= 0 ? true : false} onClick={HandleMinus}/>
                <Button textbtn="Reset 🔃" posisi=" col-start-2 justify-self-center" onClick={HandleReset}/>
            </div>
        </div>
    )
}

export default Counteran


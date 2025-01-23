import { PineconeLogo } from "@/assets/svg/pinecone-logo";
import { useState } from "react";

export const StepTwo = ({ setStep }) => {
  const [firstName, setFirstName] = useState("");
  const onContinue = () => {
    if (firstName.length === 0) {
      alert("stop it get some help");
      return;
    }
    setStep(1)
    console.log("working");
  };
  const onFirstNameChange = (e) => setFirstName(e.target.value);

  return (
    <div className="w-[480px] h-[655px] bg-white border rounded-x1 p-8">
      <PineconeLogo />
      <h1 className="text-2xl font-extrabold">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>
      <button
        onClick={onContinue}
        className="border w-full bg-black text-white h-10 mt-10 rounded-xl font-bold text-xl"
      >
        continue
      </button>
    </div>
  );
};

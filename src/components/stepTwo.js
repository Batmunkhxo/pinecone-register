import { PineconeLogo } from "@/assets/svg/pinecone-logo";
import { useState } from "react";

export const StepTwo = (props) => {
    const {setStep}=props

  const [emailName, setEmailName]=useState();
  const onContinue = () => {
    if (password.length === 0) {
      alert("stop it get some help");
      return;
    }
    setStep(3)
    console.log("working");
  };
  const onEmailChange = (e) => setEmailName(e.target.value);

  return (
    <div className="w-[480px] h-[655px] bg-white border rounded-x1 p-8 text-black">
      <PineconeLogo />
      <h1 className="text-2xl font-extrabold">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>
      <div className="flex flex-col mt-10">
        <label htmlFor="eMail">
          Email<span className="text-red-500">*</span>{" "}
        </label>
        <input
          id="email"
          className="w-full border py-3 px-2 rounded-xl "
          placeholder="Email"
          type="email"
          onChange={onEmailChange}
        />  
      </div>
      <div className="flex flex-col mt-10">
        <label htmlFor="Phonenumber">
          Phone number<span className="text-red-500">*</span>{" "}
        </label>
        <input
          id="phoneNumber"
          className="w-full border py-3 px-2 rounded-xl "
          placeholder="Phone number"
          type="number"
        />
      </div>
      <div className="flex flex-col mt-10">
        <label htmlFor="password">
          Password<span className="text-red-500">*</span>{" "}
        </label>
        <input
          id="passWord"
          className="w-full border py-3 px-2 rounded-xl "
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="flex flex-col mt-10">
        <label htmlFor="Confirmpassword">
          Confirm password<span className="text-red-500">*</span>{" "}
        </label>
        <input
          id="ConfirmPassword"
          className="w-full border py-3 px-2 rounded-xl "
          placeholder="Confirm password"
          type="password"
        />
      </div>
      <button
        onClick={onContinue}
        className="border w-full bg-black text-white h-10 mt-10 rounded-xl font-bold text-xl"
      >
        continue
      </button>
    </div>
  );
};

import { PineconeLogo } from "@/assets/svg/pinecone-logo";
import { useState } from "react";

export const StepOne = () => {
    const [firstName, setFirstName] = useState("");
    const onContinue=()=>{
        if (firstName.length === 0) {
            alert("stop it get some help");
            return;
        }
        console.log('working')
    };
    const onFirstNameChange = (e) => setFirstName(e.target.value);


  return (
    <div className="w-[480px] h-[655px] bg-white border rounded-x1 p-8">
      <PineconeLogo />
      <h1 className="text-2xl font-extrabold">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>
      <div className="flex flex-col mt-10">
        <label htmlFor="firstName">First name<span className="text-red-500">*</span> </label>
        <input
          id="firstName"
          className="w-full border py-3 px-2 rounded-xl "
          placeholder="Placeholder"
          type="text"
          onChange={onFirstNameChange}
        />
      </div>
      <div className="flex flex-col mt-10">
        <label htmlFor="lastName">Last name<span className="text-red-500">*</span> </label>
        <input
          id="lastName"
          className="w-full border py-3 px-2 rounded-xl "
          placeholder="Placeholder"
          type="text"
        />
      </div>
      <div className="flex flex-col mt-10">
        <label htmlFor="firstName">Username<span className="text-red-500">*</span> </label>
        <input
          id="userName"
          className="w-full border py-3 px-2 rounded-xl "
          placeholder="Placeholder"
          type="text"
        />
      </div>
      <button onClick={onContinue} className="border w-full bg-black text-white h-10 mt-10 rounded-xl font-bold text-xl">continue</button>
    </div>
  );
};

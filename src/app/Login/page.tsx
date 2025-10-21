import { Lock, Mail, User2 } from "lucide-react";
import LoginInput, { LoginInputType } from "../components/Input";
import Image from "next/image";

export default function LoginPage() {
  const fields: LoginInputType[] = [
    { title: "UserName", icon: <User2 color="#858584" /> },
    { title: "Email", icon: <Mail color="#858584" /> },
    { title: "Password", icon: <Lock color="#858584" /> },
    { title: "Confirm Password", icon: <Lock color="#858584" /> },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row md:w-screen gap-4 items-stretch ">
        <div className="w-full md:w-1/2 ">
          <Image
            src="your-image.jpg"
            className="h-full min-h-60 w-full object-cover bg-primary" alt={""}          />
        </div>
        <div className="flex flex-col gap-3 p-10 md:w-1/2 md:p-10 ">
          <h1 className="text-3xl font-bold ">Create Account</h1>
          <p className="text-sm">
            Welcome! enter your details and start creating.collecting and
            selling NFTs
          </p>
          {fields.map((field, index) => (
            <LoginInput key={index} {...field} />
          ))}
          <button className="bg-primary p-4 rounded-full max-w-sm">
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}

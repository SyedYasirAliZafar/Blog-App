import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div className="flex mt-16 items-center justify-center h-[calc(100vh-80px)]">
      <SignUp signInUrl="/loggin" />
    </div>
  );
};

export default RegisterPage;
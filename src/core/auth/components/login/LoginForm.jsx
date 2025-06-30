import React from "react";

import Link from "@core/auth/components/common/Link";
import Button from "@core/auth/components/common/Button";
import Input from "@core/auth/components/common/Input";
import Checkbox from "@core/auth/components/common/CheckBox";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-background-third flex min-h-screen items-center justify-center">
        <div className="bg-background-second relative my-2.5 flex min-h-[calc(100vh-20px)] w-full max-w-[1300px] items-center justify-center overflow-hidden rounded-2xl">
          <div>
            <div className="loginform bg-background-first min-h-[680px] w-3/5 min-w-[1100px] rounded-4xl p-10">
              {/*Header */}
              <Link>
                <div className="max-w-[160px]">
                  <img src="/images/logo-light.svg" alt="Login icon" />
                </div>
              </Link>
              <div className="flex items-center justify-between">
                {/*Left side */}
                <div className="w-3/5 max-w-[500px]">
                  <img src="images/login-left-bg.png" alt="Login image" />
                </div>
                {/*Right side */}
                <div className="w-2/5">
                  <div className="-mt-[40px] mb-10">
                    <h1 className="text-3xl font-bold text-white">
                      Welcome to
                    </h1>
                    <h1 className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-3xl font-bold text-transparent">
                      Crime Investigation!
                    </h1>
                  </div>

                  {/* Login Form */}
                  <form
                    className="login-form max-w-[360px]"
                    onSubmit={handleLogin}
                  >
                    <Input
                      label="Username"
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                    />

                    <Input
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />

                    {/* Remember & Forgot */}
                    <div className="mb-6 flex items-center justify-between">
                      <Checkbox label="Remember this Device" />
                      <Link className="text-blue-light text-sm hover:underline">
                        Forgot Password?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" variant="none" className="w-full">
                      Sign In
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

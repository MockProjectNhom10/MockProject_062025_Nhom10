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
      <div className="bg-background-third mobile:px-6 tablet:px-8 flex min-h-screen items-center justify-center px-4">
        <div className="bg-background-second mobile:rounded-3xl tablet:rounded-3xl relative my-2.5 flex min-h-[calc(100vh-20px)] w-full max-w-[1300px] items-center justify-center overflow-hidden rounded-2xl">
          <div>
            <div className="bg-background-first mobile:w-4/5 tablet:w-3/5 tablet:min-w-[900px] desktop:min-w-[1100px] mobile:rounded-3xl tablet:rounded-4xl mobile:p-8 tablet:p-10 min-h-[680px] w-full rounded-2xl p-6">
              {/*Header */}
              <Link>
                <div className="mobile:max-w-[140px] tablet:max-w-[160px] tablet:mx-0 mx-auto max-w-[120px]">
                  <img
                    src="/images/logo-light.svg"
                    alt="Login icon"
                    className="h-auto w-full"
                  />
                </div>
              </Link>
              <div className="tablet:flex-row tablet:gap-0 flex flex-col items-center justify-between gap-8">
                {/*Left side */}
                <div className="tablet:w-3/5 mobile:max-w-[350px] tablet:max-w-[500px] tablet:order-1 order-2 w-full max-w-[300px]">
                  <img src="images/login-left-bg.png" alt="Login image" />
                </div>
                {/*Right side */}
                <div className="tablet:w-2/5 tablet:order-2 order-1 w-full">
                  <div className="tablet:-mt-[40px] mobile:mb-8 tablet:mb-10 tablet:text-left mb-6 text-center">
                    <h1 className="mobile:text-3xl text-2xl font-bold text-white">
                      Welcome to
                    </h1>
                    <h1 className="mobile:text-3xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
                      Crime Investigation!
                    </h1>
                  </div>

                  {/* Login Form */}
                  <form
                    className="mobile:max-w-[360px] tablet:mx-0 mx-auto w-full max-w-[320px]"
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

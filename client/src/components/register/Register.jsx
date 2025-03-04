import { useForm } from "../../hooks/useForm";
import * as authApi from "../../api/authentication-api";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export default function Register() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const { changeAuthState } = useContext(AuthenticationContext);

    const { values, changeHandler, submitHandler } = useForm(
      { email: "", password: "", confirmPassword: "" },
      async ({ email, password, confirmPassword }) => {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match."); 
            return;
          }
          setErrorMessage("");

        try {
            const authData = await authApi.register(email, password);
            changeAuthState(authData);
            navigate("/home");
        } 
        catch (err) {
            setErrorMessage(err.message);
        }
      }
    );
  
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" onSubmit={submitHandler} className="space-y-6">
              <div>
                <label htmlFor="register-email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={changeHandler}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="register-password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="register-password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={changeHandler}
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="register-confirm-password" className="block text-sm/6 font-medium text-gray-900">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="register-confirm-password"
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onChange={changeHandler}
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
                {errorMessage && (
                    <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
                )}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
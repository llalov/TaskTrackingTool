import { useForm } from "../../hooks/useForm";
import * as authApi from "../../api/authentication-api"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {Link} from 'react-router-dom';
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export default function Login() {
    const navigate = useNavigate();
    const {changeAuthState} = useContext(AuthenticationContext);

    const {values, changeHandler, submitHandler} = useForm(
      {email: '', password: ''},
      async ({email, password}) => {
        try{
            const authData = await authApi.login(email, password);
            changeAuthState(authData);
            navigate('/');
        }
        catch(error){
            console.log(`Login failed. ${error.message}`)
        }
      }
    )
  
    return(
        <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            alt="Your Company"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          /> */}
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" onSubmit={submitHandler} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="login-email"
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link 
                    to="/register" 
                    className="text-indigo-600 hover:text-indigo-500 font-semibold"
                  >
                      Don't have an account? Sign up here.
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={changeHandler}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    );
}
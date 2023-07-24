import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/AuthSlice';

const Login = () => {
    const intitalState = {
      name: "",
      password: "",
      image: "",
    };
    const [values, setValues] = useState(intitalState);
    const onChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const dispatch = useDispatch();

// const Login = () => {
//     const intitalState = {
//         name: "",
//         password: ""
//     };
//     const [values, setValues] = useState(intitalState);
//     const onChange = (e) => {
//         const { name, value } = e.target;
//         setValues({ ...values, [name]: value });
//     };
//     const dispatch = useDispatch();

    return (
        
    

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <form className="space-y-6" action="#" method="POST"> */}
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                label="Name"
                                value={values.name}
                                onChange={onChange}
                                name="name"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                label="Password"
                                value={values.password}
                                onChange={onChange}
                                name="password"
                                type="password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={() => dispatch(login(values))}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                {/* </form> */}

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )

}
export default Login;
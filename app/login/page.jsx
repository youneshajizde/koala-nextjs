"use client";

import { useFormik } from "formik";
import yupFilters, { basicSchema } from "@/lib/yupFilters";
import React, { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const notify = () => toast("You have logged in!");

  const onSubmit = () => {
    notify();
  };

  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  console.log(errors);
  return (
    <div>
      <div class="min-h-[400px] bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute  inset-0 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative min-w-[600px] px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl font-semibold">Login</h1>
              </div>

              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <div class="relative">
                      <input
                        autocomplete="off"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        type="text"
                        class={`peer placeholder-transparent h-10 w-full border-b-2 ${
                          errors.email && touched.email
                            ? "border-red-400"
                            : "border-gray-200"
                        } text-gray-900 focus:outline-none focus:borer-rose-600`}
                        placeholder="Email address"
                      />
                      <label
                        for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>

                      {errors.email && touched.email ? (
                        <p className="text-sm text-red-600">
                          enter a real email address
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div class="relative mt-5">
                      <input
                        autocomplete="off"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                        class={`peer placeholder-transparent h-10 w-full border-b-2 ${
                          errors.password && touched.password
                            ? "border-red-400"
                            : "border-gray-200"
                        } text-gray-900 focus:outline-none focus:borer-rose-600`}
                        placeholder="Password"
                      />
                      <label
                        for="password"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                      {errors.password && touched.password ? (
                        <p className="text-sm text-red-600">
                          your password should include numbers and letters
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div class="relative mt-6">
                      <button
                        type="submit"
                        class="bg-cyan-500 text-white rounded-md px-2 py-1"
                      >
                        Submit
                      </button>
                    </div>
                  </form>

                  <div>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

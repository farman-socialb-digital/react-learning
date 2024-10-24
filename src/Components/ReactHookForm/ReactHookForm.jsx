import React from "react";
import { useForm } from "react-hook-form";
import loader from "/svg/loader.svg";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitting the form", data);
  }

  return (
    <div className="max-w-[550px] m-auto border border-gray-700 overflow-hidden rounded-xl mb-8">
      <p className="font-medium py-3 text-gray-300 bg-gray-800">
        React Hook Form
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-8 text-gray-400 text-start"
      >
        <input
          type="text"
          className={`rounded-full p-3 px-5 w-full bg-gray-800 outline-none text-gray-350 mb-3 ${
            errors.firstName ? "border border-red-600" : ""
          }`}
          placeholder="First Name"
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Min length atleast 3" },
            maxLength: { value: 6, message: "Max length atmost 6" },
            watch: true,
          })}
        />
        {errors.firstName && (
          <p className="text-red-600 text-center">{errors.firstName.message}</p>
        )}
        <input
          type="text"
          className={`rounded-full p-3 px-5 w-full bg-gray-800 outline-none text-gray-350 mt-5 mb-3 ${
            errors.email ? "border border-red-600" : ""
          }`}
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Please enter valid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-600 text-center">{errors.email.message}</p>
        )}
        <div className="mt-5 text-center">
          <button
            type="submit"
            className={`bg-green-700 p-2 px-4 rounded-full text-gray-300 cursor-pointer ${
              isSubmitting ? "opacity-50" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (<p className="flex">Submitting <img src= {loader} height={24} width={24} /></p>) : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReactHookForm;

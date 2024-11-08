import React from "react";
import { useForm } from "react-hook-form";
import loader from "/svg/loader.svg";

function ReactHookForm() {

  // 1 - Create Form
  // 2 - Fields Register
  // 3 - Validation
  // 4 - Error Handling
  // 5 - Styling error
  // 6 - Prevent multiple submission
  // 7 - Take care onSubmit

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
    <div className="max-w-[550px] m-auto border border-slate-700 overflow-hidden rounded-xl mb-8">
      <p className="font-medium py-3 text-slate-400 bg-slate-800">
        React Hook Form
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-8 text-slate-400 text-start"
      >
        <input
          type="text"
          className={`rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-350 mb-3 ${
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
          className={`rounded-full p-3 px-5 w-full bg-slate-800 outline-none text-slate-350 mt-5 mb-3 ${
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
        <div className="mt-5 text-center flex justify-center">
          <button
            type="submit"
            className={`bg-green-700 p-2 px-4 rounded-full text-slate-300 cursor-pointer flex ${
              isSubmitting ? "opacity-50" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (<>Submitting <img src= {loader} height={24} width={24} /></>) : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReactHookForm;

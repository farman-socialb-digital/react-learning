import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return <div>ReactHookForm</div>;
}

export default ReactHookForm;

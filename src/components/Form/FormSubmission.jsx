import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const FormSubmission = ({ state, handleSubmit, submitting }) => {
  return (
    <div className="mt-10">
      <button
        type="submit"
        disabled={submitting}
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </div>
  );
};

export default FormSubmission;
"use client";

import { useState } from "react";
import FormFields from "../components/Form/FormFields";
import FormSubmission from "../components/Form/FormSubmission";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);
  const [state, handleSubmit] = useForm("xpwpabrg");
  if (state.succeeded) {
    return (
      <p className="mt-2 text-lg/8 text-gray-600 text-center">
        Thanks for completing the form , We will get back to you shortly!
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
      <h2 className="text-3xl font-semibold text-gray-900 text-center">
      Contact Us
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600 text-center">
      Fill out the form below to get in touch with us.
      </p>
      <form onSubmit={handleSubmit} className="mx-auto mt-4 max-w-xl sm:mt-20">
        <FormFields state={state} agreed={agreed} setAgreed={setAgreed} />
        <FormSubmission state={state} handleSubmit={handleSubmit} submitting={state.submitting} />
      </form>
    </div>
  );
}

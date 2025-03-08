import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { ValidationError } from "@formspree/react";

const FormFields = ({ state, handleSubmit, agreed, setAgreed }) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      {/* Add form fields here */}
      <div className="sm:col-span-2">
        <label
          htmlFor="FullName"
          className="block text-sm/6 font-semibold text-gray-900"
        >
          Full name
        </label>
        <div className="mt-2.5">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm/6 font-semibold text-gray-900"
        >
          Email
        </label>
        <div className="mt-2.5">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm/6 font-semibold text-gray-900"
        >
          Phone number
        </label>
        <div className="mt-2.5">
          <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input
              id="number"
              name="number"
              type="text"
              placeholder="806-852-7890"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            <ValidationError
              prefix="number"
              field="number"
              errors={state.errors}
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="service"
          className="block text-sm/6 font-semibold text-gray-900"
        >
          Service
        </label>
        <div className="mt-2.5">
          <select
            id="service"
            name="service"
            required
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          >
            <option value="">Select a service</option>
            <option value="POP Ceilings">POP Ceilings</option>
            <option value="Electrical Installations">
              Electrical Installations
            </option>
            <option value="Tiling">Tiling</option>
            <option value="Painting & Wall Finishing">
              Painting & Wall Finishing
            </option>
            <option value="House Interiors">House Interiors</option>
            <option value="Rough Walls & Terrine">Rough Walls & Terrine</option>
          </select>
          <ValidationError
            prefix="service"
            field="service"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm/6 font-semibold text-gray-900"
        >
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            placeholder="Tell us about your project..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>

      {/* Add more form fields here */}
      <Field className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
            />
          </Switch>
        </div>
        <Label className="text-sm/6 text-gray-600">
          By selecting this, you agree to our{" "}
          <a href="/" className="font-semibold text-indigo-600">
            privacy&nbsp;policy
          </a>
          .
        </Label>
      </Field>
    </div>
  );
};

export default FormFields;

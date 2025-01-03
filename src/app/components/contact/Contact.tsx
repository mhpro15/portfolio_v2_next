"use client";
import React, { useState } from "react";
import "dotenv/config";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const errors = { name: "", email: "", message: "" };

      if (formState.name === "") {
        errors.name = "Name is required";
      }

      if (formState.email === "" || !validateEmail(formState.email)) {
        errors.email = "Valid email is required";
      }

      if (formState.message === "") {
        errors.message = "Message is required";
      }

      setErrors(errors);

      if (!errors.name && !errors.email && !errors.message) {
        const res = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });
        setFormState({ name: "", email: "", message: "" });
        if (res.ok) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[80%] mx-auto duration-500 ease-in-out">
      <p className="text-4xl mb-5 text-center">Contact Me</p>
      <form
        className="flex flex-col gap-4 justify-center w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <input
            className=" w-[50%] min-w-[250px] max-w-[400px] rounded-full border-2 px-5 py-1 bg-transparent m-auto "
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            className="w-[50%] min-w-[250px] max-w-[400px] rounded-full border-2 px-5 py-1 bg-transparent  m-auto"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <textarea
            className="w-[50%] min-w-[250px] max-w-[400px] min-h-[250px] max-h-[250px] rounded-lg border-2 px-5 py-1 bg-transparent  m-auto"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
          />
          {errors.message && (
            <p className="text-sm text-red-400">{errors.message}</p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="w-[50%] min-w-[250px] max-w-[400px] rounded-full border-2 px-2 py-1 bg-transparent m-auto hover:bg-text-white hover:text-[#000000] transition-all duration-300 ease-in-out"
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {success && (
        <p className="text-header-white text-center mt-5">
          Your message has been sent successfully! I will get back to you soon.
        </p>
      )}
    </div>
  );
};

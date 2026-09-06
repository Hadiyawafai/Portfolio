
import React, { useState } from "react";
import { contactDetails } from "../Services/ContactServices";

const Newspaper = () => {

  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);


  // Handle input changes
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    // Clear messages when user starts typing
    setError("");
    setSuccess("");
  };


  // Validate form
  const validateForm = () => {

    const nameRegex = /^[A-Za-z\s]{2,50}$/;

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Name validation
    if (!form.name.trim()) {
      setError("Name is required.");
      return false;
    }

    if (!nameRegex.test(form.name.trim())) {
      setError("Please enter a valid name.");
      return false;
    }


    // Email validation
    if (!form.email.trim()) {
      setError("Email is required.");
      return false;
    }

    if (!emailRegex.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return false;
    }

    return true;
  };


  // Submit form
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Validate before sending request
    if (!validateForm()) {
      return;
    }

    try {

      setLoading(true);
      setError("");
      setSuccess("");


      // Call your API function
      const response = await contactDetails(form);


      // Store response if needed
      localStorage.setItem(
        "data",
        JSON.stringify(response.data)
      );


      // Success message
      setSuccess("Your message has been sent successfully.");


      // Clear form
      setForm({
        name: "",
        email: ""
      });

    } catch (error) {

      console.error(error);

      setError(
        "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);
    }
  };


  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white
      flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-xl">

        {/* Heading */}
        <div className="mb-12">

          <p className="text-sm uppercase tracking-[0.3em]
            text-gray-500 mb-4">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-serif">
            Contact Me
          </h1>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Have a project, idea, or opportunity in mind?
            I would love to hear from you.
          </p>

        </div>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Name */}
          <div>

            <label
              htmlFor="name"
              className="block text-sm text-gray-400 mb-3"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-transparent
                border-b border-gray-700
                px-1 py-3
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-white
                transition-colors duration-300"
            />

          </div>


          {/* Email */}
          <div>

            <label
              htmlFor="email"
              className="block text-sm text-gray-400 mb-3"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-transparent
                border-b border-gray-700
                px-1 py-3
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-white
                transition-colors duration-300"
            />

          </div>


          {/* Error */}
          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}


          {/* Success */}
          {success && (
            <p className="text-sm text-green-400">
              {success}
            </p>
          )}


          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3
              bg-white text-black
              rounded-full
              font-medium
              hover:bg-gray-200
              disabled:opacity-50
              disabled:cursor-not-allowed
              transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

        </form>

      </div>

    </main>
  );
};

export default Newspaper;



import React, { useState } from "react";
import { contactDetails } from "../../Services/ContactServices";
import ReachMe from "../../Common/ReachMe";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  // Validate form
  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      setError("Name is required.");
      return false;
    }

    if (!nameRegex.test(form.name.trim())) {
      setError("Please enter a valid name.");
      return false;
    }

    if (!form.email.trim()) {
      setError("Email is required.");
      return false;
    }

    if (!emailRegex.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!form.message.trim()) {
      setError("Message is required.");
      return false;
    }

    return true;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      console.log("Sending data:", form);

      const response = await contactDetails(form);

      console.log("Backend response:", response.data);

      localStorage.setItem(
        "data",
        JSON.stringify(response.data)
      );

      setSuccess("Your message has been sent successfully.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("API Error:", error);

      if (error.response) {
        console.error("Backend response:", error.response.data);
      }

      setError(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
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
              className="w-full bg-transparent border-b border-gray-700 px-1 py-3 text-white placeholder:text-gray-600 outline-none focus:border-white transition-colors duration-300"
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
              className="w-full bg-transparent border-b border-gray-700 px-1 py-3 text-white placeholder:text-gray-600 outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gray-400 mb-3"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full bg-transparent border-b border-gray-700 px-1 py-3 text-white placeholder:text-gray-600 outline-none focus:border-white transition-colors duration-300"
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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

        </form>

        <ReachMe />
      </div>
    </main>
  );
};

export default Contact;

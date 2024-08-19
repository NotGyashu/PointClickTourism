import React, { useState } from "react";
import axios from "axios";

const SendDirectMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/contact", formData); // Update with your server endpoint
      console.log("Message sent successfully:", response.data);
      // Optionally, reset form and show a success message
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="col-span-2 md:col-span-1 border p-6 md:p-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Send Direct Message</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-yellow-500 text-white px-4 py-2 rounded-md ${
              isSubmitting
                ? "bg-yellow-400 cursor-not-allowed"
                : "hover:bg-yellow-600"
            } focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendDirectMessage;

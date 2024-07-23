import React from "react";

const Contact = () => {
  return (
    <section className="py-8 px-4 mx-auto max-w-screen-md">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500">
        Got a technical issue? Want to send feedback about a beta feature? Let us know.
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Let us know how we can help you"
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            className="form-textarea mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
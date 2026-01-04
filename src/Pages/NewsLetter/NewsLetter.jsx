import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const NewsLetter = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 px-4 sm:px-6 lg:px-8 rounded-2xl overflow-hidden mb-10 mx-3 sm:mx-6"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/sJ1JzrHG/pngtree-illustrated-3d-envelope-wings-in-flight-a-symbol-of-incoming-mail-image-3647926.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

      <motion.div
        className="relative z-10 text-center text-white max-w-3xl mx-auto flex flex-col items-center px-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
        >
          Master Import & <span className="text-red-600">Export in React</span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Learn how to structure, organize, and optimize your React components
          using clean import and export patterns. Understand named exports,
          default exports, and modular design for scalable front-end
          development.
        </motion.p>

        {/* CTA */}
        <motion.button
          className="mt-6 bg-pink-600 cursor-pointer text-white font-bold px-8 py-3 rounded-xl hover:bg-pink-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById("contact_modal").showModal()}
        >
          Contact
        </motion.button>
      </motion.div>

      {/* Modal */}
      <dialog id="contact_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>

          <form
            className="space-y-3"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;

              const data = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
              };

              const res = await fetch(
                "https://tradeflow-sarver.vercel.app/contact",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                }
              );

              await res.json();
              toast.success("Message sent successfully!");

              document.getElementById("contact_modal").close();
              form.reset();
            }}
          >
            <input
              name="name"
              required
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              required
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
            />

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("contact_modal").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default NewsLetter;

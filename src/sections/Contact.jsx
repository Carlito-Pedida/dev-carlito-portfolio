import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import StatusModal from "../components/StatusModal";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    message: "",
    isError: false
  });

  const showStatusModal = (message, isError = false) => {
    setStatusModal({ isOpen: true, message, isError });
  };

  const closeStatusModal = () => {
    setStatusModal({ ...statusModal, isOpen: false });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", phone: "", message: "" });
      showStatusModal("Your message was sent succesfully.");
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
      showStatusModal("Failed to send message, Please try again.‼️", true);
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          subT="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Your Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="What’s a good phone number to contact you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img
                        src="/images/arrow-down.svg"
                        alt="arrow"
                        className="rotate-[225deg]"
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96 relative ">
            <div className="bg-[#404c58] w-full h-full rounded-3xl overflow-hidden">
              {/* <ContactExperience /> */}
              <img
                src="/images/contact.png"
                alt="contact"
                className="w-full h-full object-cover blur-sm"
              />
              <h1 className="whitespace-nowrap absolute top-[38%]  md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-extrabold text-white-50 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.7)]">
                You have a vision built for the web?
              </h1>

              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-4xl md:text-5xl font-extrabold text-white-50 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.7)] whitespace-nowrap text-center">
                Let's make it happen! ☎️
              </h1>
              <h1 className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-extrabold text-white-50 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.7)]">
                <a
                  href="tel:8175831168"
                  className="text-center hover:underline"
                >
                  🇺🇸 +1 817-583-1168
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <StatusModal
        isOpen={statusModal.isOpen}
        onClose={closeStatusModal}
        message={statusModal.message}
        isError={statusModal.isError}
      />
    </section>
  );
};

export default Contact;

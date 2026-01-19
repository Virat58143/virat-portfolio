import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz6pF0dMsR82g5Qziug-GebQ3V0b0vftl2l6BR-c3G2WolnRhj0G63hHjJxSNs2gshe/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      // ✅ Success message
      setSuccessMsg("✅ Message sent successfully! I’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });

      // ✅ Auto hide message after 4 seconds
      setTimeout(() => {
        setSuccessMsg("");
      }, 4000);

    } catch (error) {
      setSuccessMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSuccessMsg("");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper glass">

        {/* LEFT FORM */}
        <div className="contact-form">
          <h2>Get in touch</h2>
          <p>Send a message and I’ll reply within a working day.</p>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about the project..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* ✅ SUCCESS MESSAGE */}
            {successMsg && (
              <div className="success-message">
                {successMsg}
              </div>
            )}

            <div className="contact-actions">
              <button type="submit" className="send-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                className="reset-btn"
                onClick={handleReset}
                disabled={loading}
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="contact-info">
          <h3>Contact</h3>
          <p><strong>Email:</strong> viratchoudhary741@gmail.com</p>
          <p><strong>Mobile:</strong> +91 8859151562</p>
          <p><strong>Location:</strong> India</p>
          <p><strong>Timeline:</strong> 1–2 weeks</p>

          <iframe
            src="https://www.google.com/maps?q=SD-121,+Block+D,+Swaran+Jayanti+Puram,+Govindpuram,+Ghaziabad,+Uttar+Pradesh+201013&z=17&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;

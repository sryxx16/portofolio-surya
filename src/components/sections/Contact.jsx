import React, { useState, useRef } from "react";
import { portfolioData } from "../../data/portfolio";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          alert("Pesan berhasil terkirim ke email Surya! ✅");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSending(false);
        },
        () => {
          alert("Gagal kirim pesan. Kamu juga bisa menghubungi via WhatsApp/Email langsung ya! 📩");
          setIsSending(false);
        },
      );
  };

  const contacts = [
    {
      icon: "bi-envelope-fill",
      label: "Email Langsung",
      value: portfolioData.contacts.email,
      link: `mailto:${portfolioData.contacts.email}`,
    },
    {
      icon: "bi-whatsapp",
      label: "WhatsApp",
      value: portfolioData.contacts.whatsapp,
      link: `https://wa.me/${portfolioData.contacts.whatsapp.replace(/\D/g, "")}`,
    },
    {
      icon: "bi-geo-alt-fill",
      label: "Lokasi Domisili",
      value: portfolioData.contacts.location,
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-neutral-600"></span>
            <span className="text-neutral-400 tracking-[0.25em] text-xs font-bold uppercase font-mono">
              LET'S CONNECT
            </span>
            <span className="w-6 h-[1px] bg-neutral-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Hubungi Saya
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Terbuka untuk diskusi proyek web frontend, tawaran magang/pekerjaan, maupun kolaborasi software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2">
            <div className="bg-[#121214] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-black text-white mb-3 tracking-tight">
                  Mari Berkolaborasi!
                </h4>
                <p className="text-neutral-400 mb-8 leading-relaxed text-sm">
                  Punya ide proyek atau butuh developer frontend handal untuk tim Anda? Silakan hubungi saya melalui form atau kontak langsung di bawah.
                </p>

                <div className="space-y-6">
                  {contacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={contact.link}
                      target={contact.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white/[0.04] transition-all"
                    >
                      <div className="bg-white/[0.06] border border-white/10 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-white group-hover:text-black transition-all">
                        <i className={`bi ${contact.icon}`}></i>
                      </div>
                      <div>
                        <h6 className="font-bold text-white text-sm group-hover:text-neutral-300 transition-colors">
                          {contact.label}
                        </h6>
                        <p className="text-neutral-400 text-xs mt-0.5 font-mono">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs font-mono text-neutral-400">
                  Response time: Biasanya &lt; 24 jam.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-[#121214] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda..."
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-sm font-sans"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@domain.com"
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-sm font-sans"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Subjek Diskusi
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Tawaran Project / Fulltime Opportunity"
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-sm font-sans"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan rincian pesan atau tawaran Anda di sini..."
                    rows="5"
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all resize-none text-sm font-sans"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-white hover:bg-neutral-200 text-black font-bold font-mono py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all mt-4 text-xs uppercase tracking-widest disabled:opacity-50 shadow-md"
                >
                  <span>{isSending ? "Mengirimkan Pesan..." : "Kirim Pesan Sekarang"}</span>
                  <i className="bi bi-send-fill text-sm"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

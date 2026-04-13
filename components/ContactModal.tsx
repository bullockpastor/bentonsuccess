"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "white",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  fontFamily: "var(--font-inter)",
  outline: "none",
  marginBottom: "1rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-inter)",
  color: "rgba(255,255,255,0.4)",
  fontSize: "0.65rem",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  marginBottom: "0.35rem",
};

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", label: "", address: "",
    artist: "", projectDetails: "", anrManager: "", budget: "", deadline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          fontFamily: "var(--font-inter)",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.4)",
          color: "rgba(255,255,255,0.8)",
          padding: "1.1rem 3rem",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "white";
          (e.currentTarget as HTMLButtonElement).style.color = "white";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)";
          (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.8)";
        }}
      >
        Start a Project
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 100,
              background: "rgba(0,0,0,0.85)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "1rem",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "2.5rem",
                width: "100%",
                maxWidth: "600px",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "0.4rem" }}>
                    Ivy League Productions
                  </p>
                  <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: "2.5rem", color: "white", letterSpacing: "0.05em", lineHeight: 1 }}>
                    START A PROJECT
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "1.5rem", cursor: "pointer", lineHeight: 1 }}
                >
                  ×
                </button>
              </div>

              {sent ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <p style={{ fontFamily: "var(--font-bebas)", fontSize: "2rem", color: "white", letterSpacing: "0.05em", marginBottom: "1rem" }}>
                    MESSAGE SENT
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
                    We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1rem" }}>
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone / Call Back Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="e.g. (310) 555-0100" />
                    </div>
                    <div>
                      <label style={labelStyle}>Label / Production Company</label>
                      <input name="label" value={form.label} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Artist / Group</label>
                      <input name="artist" value={form.artist} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={labelStyle}>Address</label>
                      <input name="address" value={form.address} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={labelStyle}>A&R / Manager Details</label>
                      <input name="anrManager" value={form.anrManager} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={labelStyle}>Project Details</label>
                      <textarea
                        name="projectDetails"
                        value={form.projectDetails}
                        onChange={handleChange}
                        rows={4}
                        style={{ ...inputStyle, resize: "vertical" }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Budget</label>
                      <input name="budget" value={form.budget} onChange={handleChange} style={inputStyle} placeholder="e.g. $5,000" />
                    </div>
                    <div>
                      <label style={labelStyle}>Deadline</label>
                      <input name="deadline" value={form.deadline} onChange={handleChange} style={inputStyle} placeholder="e.g. June 2026" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      marginTop: "1rem",
                      padding: "1rem",
                      background: "white",
                      color: "black",
                      border: "none",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.25em",
                      fontWeight: 600,
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.6 : 1,
                      transition: "opacity 0.3s",
                    }}
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

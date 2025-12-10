"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

const quickReplies = [
  "How does AI extraction work?",
  "What integrations do you support?",
  "Can I get a demo?",
  "What's the pricing?"
];

const botResponses: Record<string, string> = {
  "How does AI extraction work?": "Our AI uses advanced OCR and machine learning to read invoices in any format. It extracts vendor, amounts, dates, and line items with 99.5% accuracy—and learns from your corrections.",
  "What integrations do you support?": "We integrate with Bexio, Abacus, SAP, QuickBooks, Xero, and more. Plus Slack, Teams, and custom webhooks via our API.",
  "Can I get a demo?": "Absolutely! Book a personalized demo at lumafin.ch/book-demo. We'll show you the platform with your actual workflow in 30 minutes.",
  "What's the pricing?": "Plans start at CHF 199/month for up to 100 invoices. Team plan is CHF 499/month for 500 invoices. Enterprise pricing is custom. All plans include a 14-day free trial."
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! I'm here to help you learn about Lumafin Business. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    
    setTimeout(() => {
      const response = botResponses[text] || "Thanks for your question! For detailed answers, please book a demo with our team at lumafin.ch/book-demo or email us at hello@lumafin.ch";
      setMessages(prev => [...prev, { role: "bot", text: response }]);
    }, 500);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-96"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-900 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Lumafin Assistant</p>
                  <p className="text-xs text-slate-400">Usually replies instantly</p>
                </div>
              </div>
              <motion.button
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full p-1 hover:bg-white/10"
              >
                <X className="h-5 w-5 text-white" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                    msg.role === "user" ? "bg-slate-200" : "bg-slate-900"
                  }`}>
                    {msg.role === "user" ? (
                      <User className="h-4 w-4 text-slate-600" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === "user" 
                      ? "bg-slate-900 text-white" 
                      : "bg-slate-100 text-slate-700"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick replies */}
            <div className="border-t border-slate-100 px-4 py-3">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply) => (
                  <motion.button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
              
              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:outline-none"
                />
                <motion.button
                  onClick={() => handleSend(input)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


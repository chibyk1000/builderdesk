"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const conversation = [
  { sender: "user", text: "Hey, can you remind me of my meeting today?" },
  { sender: "assistant", text: "Sure! You have a meeting with Sarah at 3 PM." },
  {
    sender: "user",
    text: "Perfect. Can you also draft a quick email for her?",
  },
  {
    sender: "assistant",
    text: "Done ✅ I’ve drafted the email and saved it in your drafts.",
  },
];

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-3 py-1 bg-slate-800 rounded-2xl w-fit">
      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-300"></span>
    </div>
  );
}

function Message({ sender, text }: { sender: string; text: string }) {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isUser ? 50 : -50 }}
      transition={{ duration: 0.3 }}
      className={cn("flex mb-2", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "px-3 py-1 rounded-2xl max-w-[70%] text-xs",
          isUser
            ? "bg-teal-600 text-white rounded-br-none"
            : "bg-slate-800 text-slate-100 rounded-bl-none"
        )}
      >
        {text}
      </div>
    </motion.div>
  );
}

// Phone status bar
function PhoneStatusBar() {
  return (
    <div className="absolute top-2 left-0 w-full flex justify-between px-3 text-slate-200 text-xs">
      <div className="flex gap-1 items-center">
        {/* Signal bars */}
        <div className="flex gap-[1px] items-end h-3">
          <span className="w-[2px] bg-slate-200 h-1"></span>
          <span className="w-[2px] bg-slate-200 h-2"></span>
          <span className="w-[2px] bg-slate-200 h-3"></span>
        </div>
        <span>LTE</span>
      </div>

      <span className="absolute left-1/2 -translate-x-1/2">9:41</span>

      <div className="flex gap-1 items-center">
        {/* Wi-Fi */}
        <svg
          className="w-3 h-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M5 12.55a11 11 0 0 1 14 0M1 8.55a16 16 0 0 1 22 0M8 16h8M12 20h0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Battery */}
        <div className="w-6 h-3 border border-slate-200 rounded flex items-center">
          <div className="h-2 bg-slate-200 rounded-sm w-4/5 ml-0.5"></div>
        </div>
      </div>
    </div>
  );
}

export function PhoneChat() {
  const [index, setIndex] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (index >= conversation.length) return;

    let typingTimeout: any;
    let messageTimeout: any;

    if (conversation[index].sender === "assistant") {
      setShowTyping(true);
      typingTimeout = setTimeout(() => {
        setShowTyping(false);
        setIndex((prev) => prev + 1);
      }, 2000);
    } else {
      messageTimeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1500);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(messageTimeout);
    };
  }, [index]);

  return (
    <div className="relative w-72 h-[500px] rounded-[1rem] border-[6px] border-slate-700 bg-slate-950 shadow-2xl overflow-hidden">
      {/* Phone status bar */}
      <PhoneStatusBar />

      {/* Top notch */}
      {/* <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl"></div> */}

      {/* Chat messages */}
      <div className="absolute inset-0 p-4 pt-14 flex flex-col overflow-hidden">
        <AnimatePresence initial={false}>
          {conversation.slice(0, index).map((msg, i) => (
            <Message key={i} sender={msg.sender} text={msg.text} />
          ))}
        </AnimatePresence>

        {showTyping && <TypingIndicator />}
      </div>
    </div>
  );
}

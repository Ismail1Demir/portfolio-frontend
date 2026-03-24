"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scrolla automatiskt till senaste meddelandet
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const askAI = async () => {
    if (!query.trim()) return;

    const userMsg = query;
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setQuery("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", content: "Kunde inte nå servern. Kontrollera att backenden körs!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. CHATT-FÖNSTRET (Visas bara om isOpen är true) */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[500px] bg-[#111] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gray-900 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm text-white">Ismail AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              ✕
            </button>
          </div>

          {/* Meddelanden */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
            {messages.length === 0 && (
              <p className="text-gray-500 text-sm text-center mt-10">
                Fråga mig om Ismails projekt, erfarenhet eller tekniska skills!
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user" 
                    ? "bg-white text-black rounded-tr-none" 
                    : "bg-gray-900 text-gray-200 border border-gray-800 rounded-tl-none"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-900 text-gray-400 p-3 rounded-2xl rounded-tl-none border border-gray-800 text-xs">
                  Skriver...
                </div>
              </div>
            )}
          </div>

          {/* Input-fält */}
          <div className="p-4 bg-gray-900 border-t border-gray-800 flex gap-2">
            <input 
              className="flex-1 bg-black border border-gray-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-gray-600 transition-colors"
              placeholder="Skriv din fråga..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askAI()}
            />
            <button 
              onClick={askAI} 
              className="bg-white text-black px-4 py-2 rounded-xl font-bold text-xs hover:bg-gray-200 transition-colors"
            >
              Skicka
            </button>
          </div>
        </div>
      )}

      {/* 2. SJÄLVA BUBBLAN/KNAPPEN */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "bg-gray-800 text-white rotate-90" : "bg-white text-black"
        }`}
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Bell, Send, Plus, Bot } from "lucide-react";

const BASE_URL = "http://localhost:5000/api/text_to_image";

export default function KolamGenerate() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);

  const [messages, setMessages] = useState([]);

  const token = localStorage.getItem("token");

  /* ================= FETCH SESSIONS ================= */
  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const res = await fetch(`${BASE_URL}/sessions`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setSessions(data);
  };

  /* ================= LOAD SESSION CHAT ================= */
  const loadSession = async (sessionId) => {
    setActiveSession(sessionId);

    const res = await fetch(`${BASE_URL}/session/${sessionId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setMessages(data); // [{ promptText, imageUrl }]
  };

  /* ================= CREATE SESSION ================= */
  const createSession = async (title) => {
    const res = await fetch(`${BASE_URL}/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();

    const session = data.session; // ✅ extract session

    setSessions((prev) => [session, ...prev]);
    setActiveSession(session.id);
    setMessages([]);

    return session.id; // ✅ correct ID
  };

  /* ================= GENERATE IMAGE ================= */
  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      let sessionId = activeSession;
      console.log("Using sessionId:", sessionId);

      // ✅ First prompt → create new session
      if (!sessionId) {
        sessionId = await createSession(prompt);
      }

      const res = await fetch(`${BASE_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          sessionId,
          prompt,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          promptText: prompt,
          imageUrl: data.imageUrl,
        },
      ]);

      setPrompt("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="h-screen flex bg-gray-50">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-72 bg-white border-r flex flex-col">
        <div className="p-4">
          <button
            onClick={() => {
              setActiveSession(null);
              setMessages([]);
            }}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Plus size={18} /> New Kolam
          </button>
        </div>

        <div className="px-4 text-sm font-semibold text-gray-600 mb-2">
          Kolam History
        </div>

        <div className="flex-1 overflow-y-auto">
          {sessions.map((s) => (
            <button
              key={s.id}
              onClick={() => loadSession(s.id)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-100 ${
                activeSession === s.id ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b flex items-center px-6 justify-between">
          <div className="font-semibold text-lg">ChitraKolam</div>
          <div className="flex items-center gap-4">
            <Bell size={18} />
            <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
          </div>
        </header>

        {/* CHAT */}
        <section className="flex-1 overflow-y-auto px-10 py-8 space-y-6">
          {messages.map((m, i) => (
            <React.Fragment key={i}>
              {/* USER PROMPT */}
              <div className="flex justify-end">
                <div className="max-w-md bg-red-600 text-white p-4 rounded-xl">
                  {m.promptText}
                </div>
              </div>

              {/* IMAGE */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="bg-black/90 rounded-xl p-2">
                  <img
                    src={m.imageUrl}
                    className="rounded-lg max-w-md"
                    alt="kolam"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}

          {loading && <div className="text-gray-500">Generating...</div>}
        </section>

        {/* INPUT */}
        <div className="p-6 border-t bg-white flex items-center gap-4">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the kolam you want..."
            className="flex-1 border rounded-full px-5 py-3 outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-12 h-12 bg-red-600 rounded-full text-white flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}

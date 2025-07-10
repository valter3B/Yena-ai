
'use client'
import { useState } from "react"

export function YenaChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    setLoading(true)

    const res = await fetch("/api/yena-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    })

    const data = await res.json()
    setMessages([...messages, `🧠 Você: ${input}`, `🤖 Yena: ${data.response}`])
    setInput("")
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <div className="border p-4 rounded h-64 overflow-y-auto bg-white text-sm">
        {messages.map((msg, index) => (
          <p key={index} className="whitespace-pre-wrap">{msg}</p>
        ))}
        {loading && <p className="text-gray-500">Yena está pensando...</p>}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        className="w-full p-2 border rounded"
        placeholder="Digite um comando para a Yena..."
      />
      <button
        onClick={sendMessage}
        className="bg-black text-white px-4 py-2 rounded w-full"
      >
        Enviar
      </button>
    </div>
  )
}

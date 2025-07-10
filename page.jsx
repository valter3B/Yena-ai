
import { YenaChat } from "./components/YenaChat"

export default function Home() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Assistente Yena</h1>
      <YenaChat />
    </main>
  )
}

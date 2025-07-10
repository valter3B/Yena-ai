
export async function POST(req) {
  const { prompt } = await req.json()

  const response = {
    response: "Yena recebeu: " + prompt
  }

  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" }
  })
}

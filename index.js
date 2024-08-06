import Groq from "groq-sdk";
import "dotenv/config";

class AI {
  constructor(apiKey) {
    if(!apiKey) apiKey = process.env.API_KEY;
    this.client = new Groq({apiKey});
  }

  async chat(input,model="llama3-8b-8192",errMsg="Sorry, I don't understand that") {
    const response = await this.client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a chat bot and you have to explain whatever asked to you and you have to answer the questions in simple language. Try using simple words and short sentences. You can also ask questions to the user to get more information. Use only text data in your answers. Do not use any images or links. Do not use any offensive language. Do not use any personal information. Do not use any inappropriate content.Do not use html or mdx syntax in your responses.",
        },
        {
          role: "user",
          content: input,
        },
      ],
      model,
    });
      return (response.choices[0]?.message?.content) || errMsg;
    }
}

export default AI;
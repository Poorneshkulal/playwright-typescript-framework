import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class AIHelper {
  static async analyzeFailure(error: string) {
    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "user",

          content: `Analyze Playwright automation failure and provide root cause and solution:

${error}`,
        },
      ],
    });

    return response.choices[0].message.content;
  }
}

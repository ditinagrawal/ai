# ditin-ai

## How to use?

```js
// Import AI from package
import AI from "ditin-ai";

// Initiate AI
const ai = new AI()

// Chat
const chat = async () => {
    const res = await ai.chat("Hii")
    console.log(res)
}
chat()
```

## Use your own **api key**

You can generate your own api key from [Groq Console](https://console.groq.com/keys)

```js
const ai = new AI("your-api-key")
```

## Models

You can use different free models. Some of them are listed below -

**1. Meta Llama 3 70B [Meta]**

    id: llama3-70b-8192

**2. Meta Llama 3 8B [Meta] DEFAULT**

    id: llama3-8b-8192

**3. Mixtral 8x7B [Mistral]**

    id: mixtral-8x7b-32768

**4. Gemma 7B [Google]**

    id: gemma-7b-it

**4. Gemma 2 9B [Google]**

    id: gemma2-9b-it


## How to select custom model?

```js
    await ai.chat("Hii", "your-model-id")
```


## Add Error Message

If something bad happens or model is unable to generate text, so instead of text you can show a custom error message or response. Here's how -


```js
// Default = 'Sorry, I don't understand that'
await ai.chat("Hii", "custom-model-id", "your-error-msg")
```
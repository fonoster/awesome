# Awesome Autopilot

The begining of something great.

## Setup

To run the project, you need to have the following environment variables set:

- `AWESOME_ACCESS_KEY_ID`
- `AWESOME_API_KEY`
- `AWESOME_API_SECRET`
- `AWESOME_FROM_NUMBER`
- `AWESOME_TO_NUMBER`

Please copy the `.env.example` file to `.env` and set the environment variables and update the variables accordingly.

Then install the dependencies by running the following command:

```bash
npm install
```

## Apply changes to the App at Fonoster

To apply changes to the App at Fonoster, you can use the following command:

```bash
npm run applyAppConfig
```

This will look at the `appConfig.yaml` file and apply the changes to the App at Fonoster.

## Create a call

To create a call, you can use the following command:

```bash
npm run createCall
```

This will create a call to the number specified in the `AWESOME_TO_NUMBER` environment variable.

## Run the events server

To run the events server, you can use the following command:

```bash
npm run start:eventsServer
```

If your `eventsHook` is set you will receive events from Fonoster including the chat history which will look like this:

```js
{
  eventType: 'conversation.ended',
  chatHistory: [
    {
      ai: "Hello, I'm the Awesome Autopilot, how can I help you today?"
    },
    { human: 'trying to find out what the meaning of life' },
    { ai: "Before we dive into that, what's your name?" },
    { human: 'My name is John Doe' },
    {
      ai: 'Hello John Doe. Life is a journey of love, laughter, and learning. Anything else I can help you with?'
    },
    { human: 'No that is all' },
    { ai: 'Thank you for your time. Have a great day!' }
  ]
}
```

This will start the events server on port `3000`. You will also need to run Ngrok to expose the events server to the internet. You can do this by running the following command:

```bash
ngrok http 3000
```

This will expose the events server to the internet and you can use the URL returned by Ngrok to test the events server.



## Run the test cases

Firt, make sure to set the `apiKey` for the language model and the evals provider in the `appConfig.yaml` file.

Then, you use the following command to run the test cases:

```bash
fonoster utils:autopilotTestsCases -f appConfig.yaml
```

Your output should be similar to the following:

```
Scenario: test-case-1
Overall Passed: ✔
┌──────┬────────────────────────────┬────────────────────────────┬────────────────────────────┬────────────┬────────┐
│ Step │ Human Input                │ Expected                   │ AI Response                │ Tool Calls │ Passed │
├──────┼────────────────────────────┼────────────────────────────┼────────────────────────────┼────────────┼────────┤
│ 1    │ I want to learn about the  │ Ok, but first, what's your │ Before we dive into that,  │            │ ✔      │
│      │ meaning of life.           │ name?                      │ what's your name?          │            │        │
├──────┼────────────────────────────┼────────────────────────────┼────────────────────────────┼────────────┼────────┤
│ 2    │ My name is John Doe.       │ Great to meet you John     │ Hello John Doe. Life is a  │            │ ✔      │
│      │                            │ Doe. Life is a journey of  │ journey of love, laughter, │            │        │
│      │                            │ love, laughter, and        │ and learning. Is there     │            │        │
│      │                            │ learning. Anything else I  │ anything else I can help   │            │        │
│      │                            │ can help you with?         │ you with?                  │            │        │
├──────┼────────────────────────────┼────────────────────────────┼────────────────────────────┼────────────┼────────┤
│ 3    │ No, that's all.            │ Thank you for your time.   │ Thank you so much, bye!    │ hangup()   │ ✔      │
│      │                            │ Have a great day!          │                            │            │        │
└──────┴────────────────────────────┴────────────────────────────┴────────────────────────────┴────────────┴────────┘
```

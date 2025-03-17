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

This will start the events server on port `3000`. You will also need to run Ngrok to expose the events server to the internet. You can do this by running the following command:

```bash
ngrok http 3000
```

This will expose the events server to the internet and you can use the URL returned by Ngrok to test the events server.
